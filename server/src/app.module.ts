import { Module } from '@nestjs/common';
import { BooksModule } from './books/books.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AdherentsModule } from './adherents/adherents.module';
import { BorrowingModule } from './borrowing/borrowing.module';
import { LoanModule } from './loan/loan.module';
import { LoansModule } from './loans/loans.module';

@Module({
  imports: [
    BooksModule,
    MongooseModule.forRoot(
      'mongodb+srv://zmeddahi2001:3fKQBBDjcjXx6Dvq@cluster0.mfmabgc.mongodb.net/library-management?retryWrites=true&w=majority',
    ),
    AdherentsModule,
    BorrowingModule,
    LoanModule,
    LoansModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
