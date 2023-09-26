import { CreateContentDTO } from './create-content.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateContentDTO extends PartialType(CreateContentDTO) {
  @Field(() => ID)
  id?: string;
}
