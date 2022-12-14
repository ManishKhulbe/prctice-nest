import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { MessagesModule } from './messages/messages.module';

@Module({
  imports: [MessagesModule],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}
