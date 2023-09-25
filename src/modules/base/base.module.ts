import { Module } from '@nestjs/common';
import { Base } from './entities/base.entity';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { BaseDTO } from './dto/base.dto';


@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [
        NestjsQueryTypeOrmModule.forFeature([Base]),
      ],
      resolvers: [
        {
          DTOClass: BaseDTO,
          EntityClass: Base, 
        }
  ],
    }),
  ],
  providers: [],
})
export class BaseModule {}
