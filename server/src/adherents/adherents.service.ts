import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Adherent } from './schemas/adherent.schema';

@Injectable()
export class AdherentsService {
  constructor(
    @InjectModel('Adherent') private readonly adherentModel: Model<Adherent>,
  ) {}
}
