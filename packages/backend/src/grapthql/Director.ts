import {Field, ID, InputType, ObjectType} from "type-graphql";
import {Movie, NewMovie} from "./Movie";

@ObjectType({description: "Object representing director"})
export class Director {
  @Field(type => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  birthday: string;

  @Field((type) => [Movie])
  movies: Movie[];

  constructor(options: Partial<Director> = {}) {
    options.id && (this.id = options.id);
    options.name && (this.name = options.name);
    options.birthday && (this.birthday = options.birthday);
    options.movies && (this.movies = options.movies);
  }
}

@InputType()
export class NewDirector {
  @Field()
  name: string;

  @Field()
  birthday: string;

  @Field((type) => [NewMovie])
  movies: NewMovie[];
}
