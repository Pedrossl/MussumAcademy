import { NestjsQueryGraphQLModule, PagingStrategies } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
import { Dicipline } from './entities/dicipline.entity';
import { CreateDiciplineDTO } from './dto/create-dicipline.input';
import { DiciplineDTO } from './dto/dicipline.dto';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [
        NestjsQueryTypeOrmModule.forFeature([Dicipline]),
      ],
      resolvers: [
        {
          DTOClass: DiciplineDTO,
          EntityClass: Dicipline, 
          CreateDTOClass: CreateDiciplineDTO,
          enableTotalCount: true,
          pagingStrategy: PagingStrategies.OFFSET
        }
  ],
    }),
  ],
  providers: [],
})
export class DiciplinesModule {}
