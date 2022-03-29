import {Service, Inject} from "@tsed/common";
import {MongooseModel} from "@tsed/mongoose";
import {MovieModel} from "../models/MovieModel";

@Service()
export class MoviesService {
  constructor(@Inject(MovieModel) private model: MongooseModel<MovieModel>) {
  }

  async save(obj: MovieModel) {
    const doc = new this.model(obj);
    await doc.save();

    return doc;
  }

  async add(obj: MovieModel) {
    return await this.model.create(obj);
  }

  async find(query: any) {
    const list = await this.model.find(query).exec();
    
    return list;
  }
}