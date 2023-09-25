import { NestjsQueryGraphQLModule, PagingStrategies } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
import { Lesson } from './entities/lesson.entity';
import { LessonDTO } from './dto/lesson.dto';
import { CreateLessonDTO } from './dto/create-lesson.input';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [
        NestjsQueryTypeOrmModule.forFeature([Lesson]),
      ],
      resolvers: [
        {
          DTOClass: LessonDTO,
          EntityClass: Lesson, 
          CreateDTOClass: CreateLessonDTO,
          enableTotalCount: true,
          pagingStrategy: PagingStrategies.OFFSET
        }
  ],
    }),
  ],
  providers: [],
})
export class LessonModule {}
