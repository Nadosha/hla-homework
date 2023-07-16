import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression, SchedulerRegistry } from '@nestjs/schedule';
import {HttpService} from '@nestjs/axios'

@Injectable()
export class Scheduler {
  constructor(private readonly httpService: HttpService
){}
  private readonly logger = new Logger(Scheduler.name);
   
  @Cron(CronExpression.EVERY_10_HOURS, {
        name: 'exchangeRate',
    })
  handleExchangeRateCron() {
    this.httpService.get('https://bank.gov.ua/NBU_Exchange/exchange?CurrencyCodeL=USD').then((response) => {

      const {data} = response;
      const filteredData = data.filter((item) => item.CurrencyCodeL === "USD");

    })
    .catch((error: any) => {
      console.error('Error:', error.message);
    });
  
    this.logger.debug('Called when the current second is 45');
  }
}