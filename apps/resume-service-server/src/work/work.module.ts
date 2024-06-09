import { Module } from "@nestjs/common";
import { WorkModuleBase } from "./base/work.module.base";
import { WorkService } from "./work.service";
import { WorkController } from "./work.controller";
import { WorkResolver } from "./work.resolver";

@Module({
  imports: [WorkModuleBase],
  controllers: [WorkController],
  providers: [WorkService, WorkResolver],
  exports: [WorkService],
})
export class WorkModule {}
