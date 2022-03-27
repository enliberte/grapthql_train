import {Service, Inject} from "@tsed/common";
import {MongooseModel} from "@tsed/mongoose";
import {Movie} from "../models/Movie";

@Service()
export class MoviesService {
  constructor(@Inject(Movie) private model: MongooseModel<Movie>) {
  }

  async save(obj: Movie) {
    const doc = new this.model(obj);
    await doc.save();

    return doc;
  }

  async find(query: any) {
    const list = await this.model.find(query).exec();
    
    return list;
  }
}