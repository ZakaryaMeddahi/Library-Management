import { Test, TestingModule } from '@nestjs/testing';
import { AdherentsService } from './adherents.service';

describe('AdherentsService', () => {
  let service: AdherentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdherentsService],
    }).compile();

    service = module.get<AdherentsService>(AdherentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
