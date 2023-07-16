import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderModule } from './order/order.module';
import { ScheduleModule } from '@nestjs/schedule';
import {HttpService} from '@nestjs/axios'

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/blindspot'), ScheduleModule.forRoot(), OrderModule, HttpService],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

}
