import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateLessonDTO {
  @Field()
  description: string;
}
