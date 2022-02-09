import { Test, TestingModule } from '@nestjs/testing';
import { SignUpController } from './sign-up.controller';
import { SignUpService } from './sign-up.service';

describe('SignUpController', () => {
  let controller: SignUpController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SignUpController],
      providers: [SignUpService],
    }).compile();

    controller = module.get<SignUpController>(SignUpController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('/ route', () => {
    it('should return 400 if no name is provided', async () => {
      const httpRequest = {
        body: {
          email: 'any_email',
          password: 'any_password',
          password_confirmation: 'any_password_confirmation',
        },
      };

      const httpResponse = await controller.handle(httpRequest);
      expect(httpResponse.statusCode).toEqual(400);
      expect(httpResponse.body).toEqual(new Error('Missing param name'));
    });
  });
});
