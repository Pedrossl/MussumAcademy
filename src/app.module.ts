import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LessonModule } from './modules/lesson/lesson.module';
import { BaseModule } from './modules/base/base.module';
import { Lesson } from './modules/lesson/entities/lesson.entity';
import { DiciplinesModule } from './modules/diciplines/diciplines.module';
import { Dicipline } from './modules/diciplines/entities/dicipline.entity';
import { Content } from './modules/content/entities/content.entity';
import { ContentsModule } from './modules/content/content.module';


@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'docker',
      database: 'postgres',
      entities: [Lesson, Dicipline, Content],
      synchronize: true,
    }),
    LessonModule,
    BaseModule,
    DiciplinesModule,
    ContentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
