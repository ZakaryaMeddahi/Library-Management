import { Module } from '@nestjs/common';
import { BooksModule } from './books/books.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AdherentsModule } from './adherents/adherents.module';
import { LoansModule } from './loans/loans.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    BooksModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DATABASE_URI),
    AdherentsModule,
    LoansModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
