import * as graphql from "@nestjs/graphql";
import { AwardsResolverBase } from "./base/awards.resolver.base";
import { Awards } from "./base/Awards";
import { AwardsService } from "./awards.service";

@graphql.Resolver(() => Awards)
export class AwardsResolver extends AwardsResolverBase {
  constructor(protected readonly service: AwardsService) {
    super(service);
  }
}
