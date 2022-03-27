import {Inject} from "@tsed/di";
import {ResolverService} from "@tsed/graphql";
import {Arg, Query} from "type-graphql";
import {DirectorsService} from "../services/DirectorsService";
import {MoviesService} from "../services/MoviesService";
import {Director} from "./Director";
import { DirectorNotFoundError } from "./DirectorNotFoundError";
import { Movie } from "./Movie";

@ResolverService(Director)
export class DirectorResolver {
  @Inject(DirectorsService)
  private directorsService: DirectorsService

  @Inject(MoviesService)
  private moviesService: MoviesService

  @Query((returns) => Director, {description: "Get director by id"})
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

  @Query((returns) => [Director], {description: "Get all the directors"})
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
}
