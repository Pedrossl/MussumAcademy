import { FilterableField } from "@nestjs-query/query-graphql";
import { ObjectType } from "@nestjs/graphql";
import { BaseDTO } from "src/modules/base/dto/base.dto";



@ObjectType('lesson')
export class LessonDTO extends BaseDTO{
    
    @FilterableField()
    description: string;

    } 