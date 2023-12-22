import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Adherent } from './schemas/adherent.schema';
import { CreateAdherentDto } from './dto/create-adherent.dto';
import { UpdateAdherentDto } from './dto/update-adherent.dto';

@Injectable()
export class AdherentsService {
  constructor(
    @InjectModel('Adherent') private readonly adherentModel: Model<Adherent>,
  ) {}

  async getAllAdherents() {
    try {
      const adherents = await this.adherentModel.find();
      return adherents;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getSingleAdherent(id: number) {
    try {
      if (isNaN(id)) {
        throw new BadRequestException(`Invalid ID format: ${id}`);
      }

      const adherent = await this.adherentModel.findById(id);

      if (!adherent) {
        throw new NotFoundException(`Adherent with ID ${id} not found`);
      }

      return adherent;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async createAdherent(createAdherentDto: CreateAdherentDto) {
    try {
      const newAdherent = { ...createAdherentDto };
      const AdherentDocument = new this.adherentModel(newAdherent);
      await AdherentDocument.save();
      return AdherentDocument;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async updateAdherent(id: number, updateAdherentDto: UpdateAdherentDto) {
    try {
      if (isNaN(id)) {
        throw new BadRequestException(`Invalid ID format: ${id}`);
      }

      const updatedAdherent = await this.adherentModel.findByIdAndUpdate(
        id,
        updateAdherentDto,
        { new: true },
      );

      if (!updatedAdherent) {
        throw new NotFoundException(`Adherent with ID ${id} not found`);
      }

      return updatedAdherent;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async removeAdherent(id: number) {
    try {
      if (isNaN(id)) {
        throw new BadRequestException(`Invalid ID format: ${id}`);
      }

      const adherent = await this.adherentModel.findOne();

      if (!adherent) {
        throw new NotFoundException(`Adherent with ID ${id} not found`);
      }

      await adherent.deleteOne();

      const message = {
        message: `Adherent with ID ${id} has been deleted successfully`,
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
