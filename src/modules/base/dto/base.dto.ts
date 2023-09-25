import { FilterableField } from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class BaseDTO { 
  @FilterableField()
  createdAt: Date;

  @FilterableField()
  updateAt: Date;

  @FilterableField()
  deletedAt: Date;
}
