import { Module } from '@nestjs/common';
import { Student } from './entities/student.entity';
import { StudentDTO } from './dto/student.entity';
import { NestjsQueryGraphQLModule, PagingStrategies } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { CreateStudentDTO } from './dto/create-student.input';
import { UpdateStudentDTO } from './dto/update-student.input';


@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Student])],
      resolvers: [
        {
          DTOClass: StudentDTO,
          EntityClass: Student,
          CreateDTOClass: CreateStudentDTO,
          UpdateDTOClass: UpdateStudentDTO,
          enableTotalCount: true,
          pagingStrategy: PagingStrategies.OFFSET,
        },
      ],
    }),
  ],
  providers: [],
})
export class StudentsModule {}