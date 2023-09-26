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
      entities: [Lesson, Dicipline],
      synchronize: true,
    }),
    LessonModule,
    BaseModule,
    DiciplinesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
