import {Property} from "@tsed/schema";
import {Model, ObjectID} from "@tsed/mongoose";

@Model({
  connection: "grapthql_test"
})
export class Movie {
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