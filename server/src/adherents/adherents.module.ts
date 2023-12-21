import { Module } from '@nestjs/common';
import { AdherentsService } from './adherents.service';
import { AdherentsController } from './adherents.controller';

@Module({
  providers: [AdherentsService],
  controllers: [AdherentsController],
})
export class AdherentsModule {}
