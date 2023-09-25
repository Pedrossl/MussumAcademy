import { FilterableField } from "@nestjs-query/query-graphql";
import { ObjectType } from "@nestjs/graphql";


@ObjectType('lesson')
export class LessonDTO{
    
    @FilterableField()
    description: string;

    } 