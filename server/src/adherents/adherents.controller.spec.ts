import { Test, TestingModule } from '@nestjs/testing';
import { AdherentsController } from './adherents.controller';

describe('AdherentsController', () => {
  let controller: AdherentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdherentsController],
    }).compile();

    controller = module.get<AdherentsController>(AdherentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
