import { FilterableField, FilterableOffsetConnection } from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import { BaseDTO } from 'src/modules/base/dto/base.dto';
import { LessonDTO } from 'src/modules/lesson/dto/lesson.dto';
import { StudentDTO } from 'src/modules/students/dto/student.entity';

@ObjectType('dicipline')
@FilterableOffsetConnection('students', () => StudentDTO, {nullable: true})
@FilterableOffsetConnection('lesson', () => LessonDTO, {nullable: true})

export class DiciplineDTO extends BaseDTO {

  @FilterableField()
  name: string;
}
