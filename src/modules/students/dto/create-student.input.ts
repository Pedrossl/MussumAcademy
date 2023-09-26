import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateStudentDTO {
  @Field()
  name: string;
  
  @Field()
  key: string;
}