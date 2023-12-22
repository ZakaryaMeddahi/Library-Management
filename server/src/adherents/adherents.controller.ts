import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { AdherentsService } from './adherents.service';
import { CreateAdherentDto } from './dto/create-adherent.dto';
import { UpdateAdherentDto } from './dto/update-adherent.dto';

@Controller('adherents')
export class AdherentsController {
  constructor(private readonly adherentsService: AdherentsService) {}

  @Get()
  async getAllAdherents() {
    try {
      return await this.adherentsService.getAllAdherents();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  @Get(':id')
  async getSingleAdherent(@Param('id') id: number) {
    try {
      return await this.adherentsService.getSingleAdherent(id);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  @Post()
  async createAdherent(@Body() createAdherentDto: CreateAdherentDto) {
    try {
      return await this.adherentsService.createAdherent(createAdherentDto);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  @Patch(':id')
  async updateAdherent(
    @Param('id') id: number,
    @Body() updateAdherentDto: UpdateAdherentDto,
  ) {
    try {
      return await this.adherentsService.updateAdherent(id, updateAdherentDto);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  @Delete(':id')
  removeAdherent(@Param('id') id: number) {
    try {
      return this.adherentsService.removeAdherent(id);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
