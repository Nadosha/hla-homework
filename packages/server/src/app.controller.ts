import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('say-hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('start-observe')
  startObserveRates(): boolean {
    try {
      const isStarted = this.appService.startObservingExchangeRate();
      return isStarted;
    } catch(e) {
      throw new Error(`Something gone wrong: ${e.message}`);
      return false;
    }
  }

  @Get('stop-observe') 
  stopObserveRates(): boolean {
    try {
      const isStarted = this.appService.stopObservingExchangeRate();
      return isStarted;
    } catch(e) {
      throw new Error(`Something gone wrong: ${e.message}`);
      return false;
    }
  }
}
