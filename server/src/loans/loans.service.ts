import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Loan } from './schemas/loan.schema';

@Injectable()
export class LoansService {
  constructor(@InjectModel('Loan') private readonly LaonModel: Model<Loan>) {}
}
