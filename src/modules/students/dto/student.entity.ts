import { FilterableField, FilterableOffsetConnection } from "@nestjs-query/query-graphql";
import { ObjectType } from "@nestjs/graphql";
import { BaseDTO } from "src/modules/base/dto/base.dto";
import { DiciplineDTO } from "src/modules/diciplines/dto/dicipline.dto";

@ObjectType('Student')
@FilterableOffsetConnection('disciplines', () => DiciplineDTO, {
  nullable: true,
})
export class StudentDTO extends BaseDTO {
    @FilterableField()
    name: string;
  
    @FilterableField()
    key: string;

  }