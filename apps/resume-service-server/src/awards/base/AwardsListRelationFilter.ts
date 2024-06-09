/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AwardsWhereInput } from "./AwardsWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class AwardsListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => AwardsWhereInput,
  })
  @ValidateNested()
  @Type(() => AwardsWhereInput)
  @IsOptional()
  @Field(() => AwardsWhereInput, {
    nullable: true,
  })
  every?: AwardsWhereInput;

  @ApiProperty({
    required: false,
    type: () => AwardsWhereInput,
  })
  @ValidateNested()
  @Type(() => AwardsWhereInput)
  @IsOptional()
  @Field(() => AwardsWhereInput, {
    nullable: true,
  })
  some?: AwardsWhereInput;

  @ApiProperty({
    required: false,
    type: () => AwardsWhereInput,
  })
  @ValidateNested()
  @Type(() => AwardsWhereInput)
  @IsOptional()
  @Field(() => AwardsWhereInput, {
    nullable: true,
  })
  none?: AwardsWhereInput;
}
export { AwardsListRelationFilter as AwardsListRelationFilter };