/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Education as PrismaEducation } from "@prisma/client";

export class EducationServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.EducationCountArgs, "select">
  ): Promise<number> {
    return this.prisma.education.count(args);
  }

  async educations<T extends Prisma.EducationFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.EducationFindManyArgs>
  ): Promise<PrismaEducation[]> {
    return this.prisma.education.findMany<Prisma.EducationFindManyArgs>(args);
  }
  async education<T extends Prisma.EducationFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.EducationFindUniqueArgs>
  ): Promise<PrismaEducation | null> {
    return this.prisma.education.findUnique(args);
  }
  async createEducation<T extends Prisma.EducationCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.EducationCreateArgs>
  ): Promise<PrismaEducation> {
    return this.prisma.education.create<T>(args);
  }
  async updateEducation<T extends Prisma.EducationUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.EducationUpdateArgs>
  ): Promise<PrismaEducation> {
    return this.prisma.education.update<T>(args);
  }
  async deleteEducation<T extends Prisma.EducationDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.EducationDeleteArgs>
  ): Promise<PrismaEducation> {
    return this.prisma.education.delete(args);
  }
}
