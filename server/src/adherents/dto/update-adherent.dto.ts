import { PartialType } from '@nestjs/mapped-types';
import { CreateAdherentDto } from './create-adherent.dto';

export class UpdateAdherentDto extends PartialType(CreateAdherentDto) {}
