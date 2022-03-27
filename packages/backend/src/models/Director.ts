import {Property} from "@tsed/schema";
import {Model, ObjectID} from "@tsed/mongoose";

@Model({
  connection: "grapthql_test"
})
export class Director {
  @ObjectID("id")
  _id: string;

  @Property()
  name: string;

  @Property()
  birthday: string;
}