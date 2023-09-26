import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateContentDTO {
  @Field()
  description: string;
  
  @Field({ nullable: true})
  linkContent?: string;
}
