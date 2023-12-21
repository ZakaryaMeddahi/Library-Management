import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type LoanDocument = HydratedDocument<Loan>;

export class Loan {
  @Prop()
  _id: number;

  @Prop()
  bookId: number;

  @Prop()
  adherentId: number;

  @Prop()
  startDate: Date;

  @Prop()
  endDate: Date;
}

export const LoanSchema = SchemaFactory.createForClass(Loan);
