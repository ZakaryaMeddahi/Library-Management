import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BookDocument = HydratedDocument<Book>;

export class Book {
  @Prop()
  title: string;

  @Prop()
  author: string;

  @Prop()
  imgUrl: string;

  @Prop()
  adherent: string;
}

export const BookSchema = SchemaFactory.createForClass(Book);
