import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import axios from 'axios';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('request-consent')
  async requestConsent(@Body() partialConsentData: any) {
    return this.appService.requestConsent(partialConsentData);
  }

  @Post('consent-list')
  async getConsentList(@Body() mobileNumber: string) {
    return this.appService.getConsentList(mobileNumber);
  }

  @Post('redirect')
  async webRedirection(@Body() requestData: any) {
    return this.appService.webRedirection(requestData);
  }
}
