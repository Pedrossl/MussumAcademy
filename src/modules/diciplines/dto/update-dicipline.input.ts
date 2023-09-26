import { CreateDiciplineDTO} from './create-dicipline.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateDiciplineInput extends PartialType(CreateDiciplineDTO) {
  @Field(() => Int)
  id: number;
}
