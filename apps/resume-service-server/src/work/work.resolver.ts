import * as graphql from "@nestjs/graphql";
import { WorkResolverBase } from "./base/work.resolver.base";
import { Work } from "./base/Work";
import { WorkService } from "./work.service";

@graphql.Resolver(() => Work)
export class WorkResolver extends WorkResolverBase {
  constructor(protected readonly service: WorkService) {
    super(service);
  }
}
