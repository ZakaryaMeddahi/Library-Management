import { Module } from '@nestjs/common';
import { BooksModule } from './books/books.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    BooksModule,
    MongooseModule.forRoot(
      'mongodb+srv://zmeddahi2001:3fKQBBDjcjXx6Dvq@cluster0.mfmabgc.mongodb.net/library-management?retryWrites=true&w=majority',
    ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
