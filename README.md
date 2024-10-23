
# Moneyone FinPro Integration Documentation

## Overview

This project is an **integration of the web redirection flow** of **Moneyone FinPro**, enabling seamless access to its financial tools.
This integration will let you access user's financial data via the Moneyone Finpro Financial Aggregator.


---

## How to use it:

- **Request Consent**: Call the `request-consent` api route with required data. 
	- Note: Currently, an example object is given in the `requestConsent` method, follow the same outline.
This step will give you a consent handle which is needed in the redirection flow.
- **Carry out the Web Redirection Flow**: Using the consent handle recieved in the previous step, hit the `web-redirection` route. Please check `webRedirection` method to add remaining data points
- **Get Consent List**: Consent list consists of all the consents created, pick the very first (latest one created) to use for fetching user's financials.
	- Example: If you need to get account balance or fi data, you will need a consent id, which this first object should contain.
In a nutshell, to access any financial data, having the consent list is very necessary.

---

## Prerequisites

- **Moneyone FinPro Account**: Ensure you have an active Moneyone FinPro account with API access.
- **API Credentials**: Get the necessary **client ID**, **client secret**, and **redirect URL** from Moneyone FinPro’s developer portal.
- **Web Application**: A web application or service that will integrate this redirection flow.

---

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/anujgawde/moneyone-finpro-integration
   cd moneyone-finpro-integration
