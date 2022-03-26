import {Controller} from "@tsed/di";
import {Get, Post} from "@tsed/schema";

@Controller("/hello-world")
export class HelloWorldController {
  @Get("/")
  get() {
    return "hello world";
  }

  @Post('/')
  post() {
    return "post"
  }
}
