import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { LoansService } from './loans.service';
import { CreateLoanDto } from './dto/create-loan.dto';
import { UpdateLoanDto } from './dto/update-loan.dto';

@Controller('loans')
export class LoansController {
  constructor(private readonly loansService: LoansService) {}

  @Get()
  async getAllLoans() {
    try {
      return await this.loansService.getAllLoans();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  @Get(':id')
  async getSingleLoan(@Param('id') id: string) {
    try {
      return await this.loansService.getSingleLoan(id);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  @Post()
  async createLoan(@Body() createLoanDto: CreateLoanDto) {
    try {
      return await this.loansService.createLoan(createLoanDto);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  @Patch(':id')
  async updateLoan(
    @Param('id') id: string,
    @Body() updateLoanDto: UpdateLoanDto,
  ) {
    try {
      return this.loansService.updateLoan(id, updateLoanDto);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  @Delete(':id')
  async removeLoan(@Param('id') id: string) {
    try {
      return await this.loansService.removeLoan(id);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
