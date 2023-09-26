import { CreateDiciplineInput } from './create-dicipline.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateDiciplineInput extends PartialType(CreateDiciplineInput) {
  @Field(() => Int)
  id: number;
}
