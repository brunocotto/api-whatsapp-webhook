import {
  BadRequestException,
  Controller,
  Get,
  HttpCode,
  Query,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Controller('/webhooks')
export class CreateDataWebHookController {
  private readonly verifyToken: string;

  constructor(private readonly configService: ConfigService) {
    this.verifyToken = this.configService.get<string>('VERIFY_TOKEN');
  }

  @Get()
  @HttpCode(200)
  async verify(
    @Query('hub.mode') mode: string,
    @Query('hub.challenge') challenge: string,
    @Query('hub.verify_token') token: string,
  ) {
    if (mode === 'subscribe' && token === this.verifyToken) {
      return challenge;
    } else {
      throw new BadRequestException('Token de verificação inválido.');
    }
  }
}
