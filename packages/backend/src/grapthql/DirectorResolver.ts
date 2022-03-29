import {Inject} from "@tsed/di";
import {ResolverService} from "@tsed/graphql";
import {Arg, Mutation, Query} from "type-graphql";
import {DirectorsService} from "../services/DirectorsService";
import {MoviesService} from "../services/MoviesService";
import {Director, NewDirector} from "./Director";
import { DirectorNotFoundError } from "./DirectorNotFoundError";
import { Movie } from "./Movie";
import {DirectorModel} from "../models/DirectorModel";
import {MovieModel} from "../models/MovieModel";

@ResolverService(Director)
export class DirectorResolver {
  @Inject(DirectorsService)
  private directorsService: DirectorsService

  @Inject(MoviesService)
  private moviesService: MoviesService

  @Query(returns => Director, {description: "Get director by id"})
  async director(@Arg("id") id: string) {
    const director = await this.directorsService.findById(id);

    if (!director) {
      throw new DirectorNotFoundError(id);
    }
    
    const movies = await this.moviesService.find({directorId: id});

    return new Director({
      id: director.id,
      name: director.name,
      birthday: director.birthday,
      movies: movies.map(movie => new Movie(movie))
    });
  }

  @Query(returns => [Director], {description: "Get all the directors"})
  async directors(): Promise<Director[]> {
    const directors = await this.directorsService.findAll();
    
    return await Promise.all(directors.map(async director => {
      const movies = await this.moviesService.find({directorId: director.id});
      return new Director({
        id: director.id,
        name: director.name,
        birthday: director.birthday,
        movies: movies.map(movie => new Movie(movie))
      });
    }));
  }

  @Mutation(returns => Director, {description: "Add new director"})
  async addDirector(@Arg('data') data: NewDirector): Promise<Director> {
    const {movies: moviesToCreate, ...rest} = data;

    const director = await this.directorsService.add(rest as DirectorModel);

    const createdMovies = await Promise.all(moviesToCreate.map(async (movieToCreate) => {
      const savedMovie = await this.moviesService.add({...movieToCreate, directorId: director.id} as MovieModel);
      return new Movie({
        id: savedMovie.id,
        name: savedMovie.name,
        rating: savedMovie.rating,
        year: savedMovie.year
      });
    }));

    return new Director({
      id: director.id,
      name: director.name,
      birthday: director.birthday,
      movies: createdMovies
    });
  }
}
