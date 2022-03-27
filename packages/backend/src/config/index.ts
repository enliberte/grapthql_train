import "@tsed/mongoose";
import "@tsed/platform-express";
import { IResolvers } from "apollo-server-express";
import {readFileSync} from "fs";
import { DirectorResolver } from "src/grapthql/DirectorResolver";
import {envs} from "./envs";
import loggerConfig from "./logger";
const pkg = JSON.parse(readFileSync("./package.json", {encoding: "utf8"}));

export const config: Partial<TsED.Configuration> = {
  version: pkg.version,
  envs,
  logger: loggerConfig,
  graphql: {
    default: {
      path: "/graphql",
      resolvers: [DirectorResolver] as unknown as IResolvers,
      buildSchemaOptions: {}
    }
  },
  mongoose: [
    {
      id: "default",
      url: "mongodb://127.0.0.1:27017/default",
      connectionOptions: {}
    },
    {
      id: "grapthql_test",
      url: "mongodb://127.0.0.1:27017/grapthql_test",
      connectionOptions: {}
    }
  ]
  // additional shared configuration
};
