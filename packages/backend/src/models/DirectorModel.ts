import {Property} from "@tsed/schema";
import {Model, ObjectID} from "@tsed/mongoose";

@Model({
  connection: "grapthql_test",
  collection: "directors"
})
export class DirectorModel {
  @ObjectID("id")
  _id: string;

  @Property()
  name: string;

  @Property()
  birthday: string;
}