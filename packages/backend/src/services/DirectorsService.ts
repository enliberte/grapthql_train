import {Service, Inject} from "@tsed/common";
import {MongooseModel} from "@tsed/mongoose";
import {Director} from "../models/Director";

@Service()
export class DirectorsService {
  constructor(@Inject(Director) private model: MongooseModel<Director>) {
  }

  async save(obj: Director) {
    const doc = new this.model(obj);
    await doc.save();

    return doc;
  }

  async find(query: any) {
    const list = await this.model.find(query).exec();

    return list;
  }

  async findAll() {
    return await this.find({});
  }

  async findById(id: string) {
    const director = await this.model.findById(id);

    return director;
  }
}