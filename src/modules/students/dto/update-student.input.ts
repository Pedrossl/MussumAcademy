import { CreateStudentDTO } from './create-student.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateStudentDTO extends PartialType(CreateStudentDTO) {
  @Field(() => Int)
  id: number;
}
