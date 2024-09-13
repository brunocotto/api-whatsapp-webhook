import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { CreateDataWebHookController } from './controllers/create-data-wehbook.controller';
import { GetDataWebHookController } from './controllers/get-data-webhook.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [CreateDataWebHookController, GetDataWebHookController],
})
export class HttpModule {}
