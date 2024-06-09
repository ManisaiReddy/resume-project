import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AwardsServiceBase } from "./base/awards.service.base";

@Injectable()
export class AwardsService extends AwardsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
