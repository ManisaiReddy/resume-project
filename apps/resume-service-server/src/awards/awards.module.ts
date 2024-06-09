import { Module } from "@nestjs/common";
import { AwardsModuleBase } from "./base/awards.module.base";
import { AwardsService } from "./awards.service";
import { AwardsController } from "./awards.controller";
import { AwardsResolver } from "./awards.resolver";

@Module({
  imports: [AwardsModuleBase],
  controllers: [AwardsController],
  providers: [AwardsService, AwardsResolver],
  exports: [AwardsService],
})
export class AwardsModule {}
