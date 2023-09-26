import { FilterableField } from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import { BaseDTO } from 'src/modules/base/dto/base.dto';

@ObjectType('dicipline')
export class DiciplineDTO extends BaseDTO {

  @FilterableField()
  name: string;

}
