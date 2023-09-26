import { CreateContentDTO } from './create-content.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateContentInput extends PartialType(CreateContentDTO) {
  @Field(() => Int)
  id: number;
}
