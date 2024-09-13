import {
  BadRequestException,
  Body,
  Controller,
  HttpCode,
  Post,
} from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';

@Controller('/webhook')
export class CreateDataWebHookController {
  constructor(private readonly prisma: PrismaService) {}

  @Post()
  @HttpCode(201)
  async handle(@Body() body: any) {
    try {
      const bodyAsString = JSON.stringify(body);

      await this.prisma.notification.create({
        data: {
          message: bodyAsString,
        },
      });
    } catch (error) {
      throw new BadRequestException('Ocorreu um erro ao salvar os dados.');
    }
  }
}
