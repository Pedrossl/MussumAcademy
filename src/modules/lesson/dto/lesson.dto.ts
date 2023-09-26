import { FilterableField, FilterableOffsetConnection } from "@nestjs-query/query-graphql";
import { ObjectType } from "@nestjs/graphql";
import { BaseDTO } from "src/modules/base/dto/base.dto";
import { ContentDTO } from "src/modules/content/dto/content.dto";
import { DiciplineDTO } from "src/modules/diciplines/dto/dicipline.dto";

@ObjectType('lesson')
@FilterableOffsetConnection('dicipline',() => DiciplineDTO,{nullable: true})
@FilterableOffsetConnection('contents',() => ContentDTO,{nullable: true})
export class LessonDTO extends BaseDTO{
    
    @FilterableField()
    description: string;

} 