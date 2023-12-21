import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { LoansService } from './loans.service';

@Controller('loans')
export class LoansController {
  constructor(private readonly loansService: LoansService) {}

  @Get()
  getAllLoans(): string {
    return 'This action returns all loans';
  }

  @Get(':id')
  getSingleLoan(@Param('id') id: number): string {
    return `This action returns a #${id} loan`;
  }

  @Post()
  createLoan(): string {
    return 'This action adds a new loan';
  }

  @Patch(':id')
  updateLoan(@Param('id') id: number): string {
    return `This action updates a loan with id #${id}`;
  }

  @Delete(':id')
  removeLoan(@Param('id') id: number): string {
    return `This action removes a loan with id #${id}`;
  }
}
