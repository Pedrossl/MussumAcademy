import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateDiciplineInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
