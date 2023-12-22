import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AdherentDocument = HydratedDocument<Adherent>;

@Schema()
export class Adherent {
  @Prop()
  _id: number;

  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop({ default: 0 })
  borrowingCount: number;
}

export const AdherentSchema = SchemaFactory.createForClass(Adherent);
