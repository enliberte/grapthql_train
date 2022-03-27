import {NotFound} from "@tsed/exceptions";

export class DirectorNotFoundError extends NotFound {
  constructor(private id: string) {
    super(`Director ${id} not found`);
  }
}