import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Dicipline {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
