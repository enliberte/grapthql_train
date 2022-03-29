import {Service, Inject} from "@tsed/common";
import {MongooseModel} from "@tsed/mongoose";
import {DirectorModel} from "../models/DirectorModel";

@Service()
export class DirectorsService {
  constructor(@Inject(DirectorModel) private model: MongooseModel<DirectorModel>) {
  }

  async save(obj: DirectorModel) {
    const doc = new this.model(obj);
    await doc.save();

    return doc;
  }

  async add(obj: DirectorModel) {
    const director = await this.model.create(obj);

    return director;
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