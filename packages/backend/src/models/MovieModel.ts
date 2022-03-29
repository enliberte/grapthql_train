import {Property} from "@tsed/schema";
import {Model, ObjectID} from "@tsed/mongoose";

@Model({
  connection: "grapthql_test",
  collection: "movies",
})
export class MovieModel {
  @ObjectID("id")
  _id: string;

  @Property()
  name: string;

  @Property()
  year: number;

  @Property()
  rating: number;

  @Property()
  directorId: string;
}