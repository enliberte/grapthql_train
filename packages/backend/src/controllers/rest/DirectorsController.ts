import {Controller, Inject} from "@tsed/di";
import {Get, Post} from "@tsed/schema";
import {DirectorsService} from "../../services/DirectorsService";

@Controller("/directors")
export class DirectorsController {
  constructor(@Inject(DirectorsService) private directorsService: DirectorsService) {}

  @Get("/")
  get() {
    return this.directorsService.find({});
  }

  @Post('/')
  post() {
    return "post"
  }
}
