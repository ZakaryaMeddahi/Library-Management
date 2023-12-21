import { Module, Type } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { ModelDefinition, MongooseModule } from '@nestjs/mongoose';
import { BookSchema } from './schemas/book.schema';

@Module({
  controllers: [
    BooksController,
    // MongooseModule.forFeature([
    //   { name: 'Book', schema: BookSchema } as Type<ModelDefinition>,
    // ]),
  ],
  providers: [BooksService],
})
export class BooksModule {}
