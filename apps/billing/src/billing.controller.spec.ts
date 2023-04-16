import { Test, TestingModule } from '@nestjs/testing';
import { BillingController } from './billing.controller';
import { BillingService } from './billing.service';
import { RmqService } from '@app/common';
import { ConfigService } from '@nestjs/config';

describe('BillingController', () => {
  let billingController: BillingController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BillingController],
      providers: [BillingService, ConfigService, RmqService],
    }).compile();

    billingController = app.get<BillingController>(BillingController);
  });

  describe('root', () => {
    it('should be defined', () => {
      expect(billingController).toBeDefined();
    });
  });
});
