import { Injectable } from '@nestjs/common';
import{ SchedulerRegistry } from '@nestjs/schedule';
import {HttpService} from '@nestjs/axios'

@Injectable()
export class AppService {
      constructor(
        private schedulerRegistry: SchedulerRegistry
        ) {}

  getHello(): string {
    return 'My name is Andrii. Say my name!';
  }

  startObservingExchangeRate(): any {
    const job = this.schedulerRegistry.getCronJob('exchangeRate');

    job.start();
    console.log(job.lastDate());
    return !!job.lastDate();
  }
  stopObservingExchangeRate(): any {
    const job = this.schedulerRegistry.getCronJob('exchangeRate');

    job.stop();
    console.log(job.lastDate());
    return !!job.lastDate();
  }
}
