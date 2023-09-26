import { NestjsQueryGraphQLModule, PagingStrategies } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
import { Content } from './entities/content.entity';
import { ContentDTO } from './dto/content.dto';
import { CreateContentDTO } from './dto/create-content.input';
import { UpdateContentDTO } from './dto/update-content.input';



@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Content])],
      resolvers: [
        {
          DTOClass: ContentDTO,
          EntityClass: Content,
          CreateDTOClass: CreateContentDTO,
          UpdateDTOClass: UpdateContentDTO,
          enableTotalCount: true,
          pagingStrategy: PagingStrategies.OFFSET,
        },
      ],
    }),
  ],
  providers: [],
})
export class ContentsModule {}
