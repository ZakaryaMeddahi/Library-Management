import { Module } from '@nestjs/common';
import { LoansService } from './loans.service';
import { LoansController } from './loans.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { LoanSchema } from './schemas/loan.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Loan', schema: LoanSchema }])],
  providers: [LoansService],
  controllers: [LoansController],
})
export class LoansModule {}
