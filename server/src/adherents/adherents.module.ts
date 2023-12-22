import { Module } from '@nestjs/common';
import { AdherentsService } from './adherents.service';
import { AdherentsController } from './adherents.controller';
import { AdherentSchema } from './schemas/adherent.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Adherent', schema: AdherentSchema }]),
  ],
  providers: [AdherentsService],
  controllers: [AdherentsController],
})
export class AdherentsModule {}
