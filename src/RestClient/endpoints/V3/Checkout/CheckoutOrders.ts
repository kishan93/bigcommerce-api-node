import { AxiosInstance } from 'axios';

import { getCheckoutsPath } from './Checkouts';
import type { CheckoutOrder } from './types';

const CHECKOUT_ORDERS_PATH = '/orders';

export const getCheckoutOrdersPath = (checkoutId: string): string =>
  `${getCheckoutsPath(checkoutId)}${CHECKOUT_ORDERS_PATH}`;

export class CheckoutOrders {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  create(checkoutId: string): CheckoutOrder['CreateResponse'] {
    return this.client.post(getCheckoutOrdersPath(checkoutId));
  }
}
