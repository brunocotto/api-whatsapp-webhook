import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { CreateDataWebHookController } from './controllers/create-data-wehbook.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [CreateDataWebHookController],
})
export class HttpModule {}
