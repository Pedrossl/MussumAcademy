import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateDiciplineDTO {
  @Field()
  name: string;

  @Field({nullable: true})
  lessonId?: string;
}
