import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AdherentDocument = HydratedDocument<Adherent>;

export class Adherent {
  @Prop()
  _id: number;

  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  borrowingCount: number;
}

export const AdherentSchema = SchemaFactory.createForClass(Adherent);
