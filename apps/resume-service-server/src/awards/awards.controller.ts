import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AwardsService } from "./awards.service";
import { AwardsControllerBase } from "./base/awards.controller.base";

@swagger.ApiTags("awards")
@common.Controller("awards")
export class AwardsController extends AwardsControllerBase {
  constructor(protected readonly service: AwardsService) {
    super(service);
  }
}
