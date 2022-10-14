import { Test, TestingModule } from '@nestjs/testing';
import { SgaController } from './sga.controller';
import { SgaService } from './sga.service';

describe('SgaController', () => {
  let sgaController: SgaController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SgaController],
      providers: [SgaService],
    }).compile();

    sgaController = app.get<SgaController>(SgaController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(sgaController.getHello()).toBe('Hello World!');
    });
  });
});
