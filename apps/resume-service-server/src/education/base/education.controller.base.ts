/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { EducationService } from "../education.service";
import { EducationCreateInput } from "./EducationCreateInput";
import { Education } from "./Education";
import { EducationFindManyArgs } from "./EducationFindManyArgs";
import { EducationWhereUniqueInput } from "./EducationWhereUniqueInput";
import { EducationUpdateInput } from "./EducationUpdateInput";

export class EducationControllerBase {
  constructor(protected readonly service: EducationService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Education })
  async createEducation(
    @common.Body() data: EducationCreateInput
  ): Promise<Education> {
    return await this.service.createEducation({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Education] })
  @ApiNestedQuery(EducationFindManyArgs)
  async educations(@common.Req() request: Request): Promise<Education[]> {
    const args = plainToClass(EducationFindManyArgs, request.query);
    return this.service.educations({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Education })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async education(
    @common.Param() params: EducationWhereUniqueInput
  ): Promise<Education | null> {
    const result = await this.service.education({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Education })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateEducation(
    @common.Param() params: EducationWhereUniqueInput,
    @common.Body() data: EducationUpdateInput
  ): Promise<Education | null> {
    try {
      return await this.service.updateEducation({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Education })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteEducation(
    @common.Param() params: EducationWhereUniqueInput
  ): Promise<Education | null> {
    try {
      return await this.service.deleteEducation({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
