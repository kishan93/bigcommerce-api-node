import { AxiosInstance } from 'axios';

import { getCheckoutsPath } from './Checkouts';
import type { CheckoutOrder } from './types';

export class CheckoutOrders {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  create(checkoutId: string): CheckoutOrder['CreateResponse'] {
    return this.client.post(getCheckoutsPath(checkoutId));
  }
}
