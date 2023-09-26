import { Module } from '@nestjs/common';
import { DiciplinesService } from './diciplines.service';
import { DiciplinesResolver } from './diciplines.resolver';

@Module({
  providers: [DiciplinesResolver, DiciplinesService],
})
export class DiciplinesModule {}
