import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AppService {
  async requestConsent(partialConsentData: any) {
    try {
      const baseURL = `${process.env.MONEYONE_BASE_URL}/requestconsent`;

      const data = {
        partialConsentData,
        productID: process.env.PRODUCT_ID,
      };

      const result = await axios.post(baseURL, data, {
        headers: {
          'Content-Type': 'application/json',
          client_secret: process.env.MONEYONE_CLIENT_SECRET,
          organisationId: process.env.ORG_ID,
          client_id: process.env.CLIENT_ID,
          appIdentifier: process.env.APP_IDENTIFIER,
        },
      });

      return result.data.data.consent_handle;
    } catch (e) {
      console.log(e);
      return e;
    }
  }

  async getConsentList(mobileNumber: string) {
    try {
      const data = {
        mobileNumber: mobileNumber,
        productID: process.env.PRODUCT_ID,
        accountID: process.env.ACCOUNT_ID,
        status: process.env.STATUS,
      };

      const result = await axios.post(
        `${process.env.MONEYONE_BASE_URL}/getconsentslist`,
        data,
        {
          headers: {
            'Content-Type': 'application/json',
            client_secret: process.env.MONEYONE_CLIENT_SECRET,
            organisationId: process.env.ORG_ID,
            client_id: process.env.CLIENT_ID,
            appIdentifier: process.env.APP_IDENTIFIER,
          },
        },
      );
      return result.data.data;
    } catch (e) {
      console.log(e);
      return e;
    }
  }

  async webRedirection(requestData: any) {
    try {
      const data = {
        redirectUrl: process.env.REDIRECTION_URL,
        userid: requestData.userId,
        consentHandle: requestData.consentHandle,
      };

      const result = await axios.post(
        `${process.env.MONEYONE_BASE_URL}/webRedirection/getEncryptedUrl`,
        data,
        {
          headers: {
            'Content-Type': 'application/json',
            client_secret: process.env.MONEYONE_CLIENT_SECRET,
            organisationId: process.env.ORG_ID,
            client_id: process.env.CLIENT_ID,
            appIdentifier: process.env.APP_IDENTIFIER,
          },
        },
      );
      return result.data.data.webRedirectionUrl;
    } catch (e) {
      console.log(e);
      return e;
    }
  }
}
