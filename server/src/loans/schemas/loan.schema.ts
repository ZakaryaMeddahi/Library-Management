import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Adherent } from 'src/adherents/schemas/adherent.schema';
import { Book } from 'src/books/schemas/book.schema';

export type LoanDocument = HydratedDocument<Loan>;

@Schema()
export class Loan {
  @Prop({ type: Types.ObjectId, ref: 'Book', required: true })
  bookId: Book;

  @Prop({ type: Number, ref: 'Adherent', required: true })
  adherentId: Adherent;

  @Prop({ default: new Date() })
  startDate: Date;

  @Prop()
  endDate: Date;
}

export const LoanSchema = SchemaFactory.createForClass(Loan);
