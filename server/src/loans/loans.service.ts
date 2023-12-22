import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Loan } from './schemas/loan.schema';
import { CreateLoanDto } from './dto/create-loan.dto';
import { UpdateLoanDto } from './dto/update-loan.dto';

@Injectable()
export class LoansService {
  constructor(@InjectModel('Loan') private readonly LaonModel: Model<Loan>) {}

  async getAllLoans() {
    try {
      const loans = await this.LaonModel.find();
      return loans;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getSingleLoan(id: string) {
    try {
      if (!Types.ObjectId.isValid(id)) {
        throw new BadRequestException(`Invalid ID format: ${id}`);
      }

      const loan = await this.LaonModel.findById(id);

      if (!loan) {
        throw new NotFoundException(`Loan with ID ${id} not found`);
      }

      return loan;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async createLoan(createLoanDto: CreateLoanDto) {
    try {
      const newLoan = { ...createLoanDto };
      const loanDocument = new this.LaonModel(newLoan);
      await loanDocument.save();
      return loanDocument;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async updateLoan(id: string, updateLoanDto: UpdateLoanDto) {
    try {
      if (!Types.ObjectId.isValid(id)) {
        throw new BadRequestException(`Invalid ID format: ${id}`);
      }

      const updatedLoan = await this.LaonModel.findByIdAndUpdate(
        id,
        { ...updateLoanDto },
        { new: true },
      );

      if (!updatedLoan) {
        throw new NotFoundException(`Loan with ID ${id} not found`);
      }

      return updatedLoan;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async removeLoan(id: string) {
    try {
      if (!Types.ObjectId.isValid(id)) {
        throw new BadRequestException(`Invalid ID format: ${id}`);
      }

      const loan = await this.LaonModel.findById(id);

      if (!loan) {
        throw new NotFoundException(`Loan with ID ${id} not found`);
      }

      await loan.deleteOne();

      const message = {
        message: `Loan with ID ${id} has been deleted successfully`,
        success: 'OK',
        statusCode: 200,
      };

      return message;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
