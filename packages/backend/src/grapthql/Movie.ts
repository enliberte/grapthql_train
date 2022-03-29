import {Field, ID, InputType, ObjectType} from "type-graphql";

@ObjectType({description: "Object representing movie"})
export class Movie {
  @Field(type => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  year: number;

  @Field()
  rating: number;

  constructor(options: Partial<Movie> = {}) {
    options.id && (this.id = options.id);
    options.name && (this.name = options.name);
    options.year && (this.year = options.year);
    options.rating && (this.rating = options.rating);
  }
}

@InputType()
export class NewMovie {
  @Field()
  name: string;

  @Field()
  year: number;

  @Field()
  rating: number;
}
