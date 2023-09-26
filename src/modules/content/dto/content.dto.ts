import { FilterableField, FilterableRelation } from "@nestjs-query/query-graphql";
import { ObjectType } from "@nestjs/graphql";
import { BaseDTO } from "src/modules/base/dto/base.dto";
import { LessonDTO } from "src/modules/lesson/dto/lesson.dto";

@ObjectType('Content')
@FilterableRelation('lesson', () => LessonDTO)
export class ContentDTO extends BaseDTO {
    @FilterableField()
    description: string;
  
    @FilterableField({nullable: true})
    linkContent: string;
  }