import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { AdherentsService } from './adherents.service';

@Controller('adherents')
export class AdherentsController {
  constructor(private readonly adherentsService: AdherentsService) {}

  @Get()
  getAllAdherents(): string {
    return 'This action returns all adherents';
  }

  @Get(':id')
  getSingleAdherent(@Param('id') id: number): string {
    return `This action returns a #${id} adherent`;
  }

  @Post()
  createAdherent(): string {
    return 'This action adds a new adherent';
  }

  @Patch(':id')
  updateAdherent(@Param('id') id: number): string {
    return `This action updates an adherent with id #${id}`;
  }

  @Delete(':id')
  removeAdherent(@Param('id') id: number): string {
    return `This action removes an adherent with id #${id}`;
  }
}
