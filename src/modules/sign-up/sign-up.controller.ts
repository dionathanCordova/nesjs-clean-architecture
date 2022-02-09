import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { SignUpService } from './sign-up.service';

@Controller('sign-up')
export class SignUpController {
  constructor(private readonly signUpService: SignUpService) {}

  @Get('')
  async handle(@Res() httpRequest: any) {
    const message = !httpRequest.body.name
      ? new Error('Missing param name')
      : !httpRequest.body.email
      ? new Error('Missing param email')
      : '';

    return { statusCode: HttpStatus.BAD_REQUEST, body: message };
  }
}
