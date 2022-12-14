import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { MessagesModule } from './messages/messages.module';
import { ComputerModule } from './computer/computer.module';
import { CpuModule } from './cpu/cpu.module';
import { DiskModule } from './disk/disk.module';
import { PowerModule } from './power/power.module';

@Module({
  imports: [MessagesModule, ComputerModule, CpuModule, DiskModule, PowerModule],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}
