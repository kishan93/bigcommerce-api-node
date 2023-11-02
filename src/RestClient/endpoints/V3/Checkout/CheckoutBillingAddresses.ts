import { AxiosInstance } from 'axios';

import { getCheckoutsPath } from './Checkouts';
import type { CheckoutBillingAddress } from './types';

export const getCheckoutBillingAddressPath = (checkoutId: string, id?: string): string =>
  id ? `${getCheckoutsPath(checkoutId)}/billing-addresses/${id}` : `${getCheckoutsPath(checkoutId)}/billing-addresses`;

export class CheckoutBillingAddresses {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  create(checkoutId: string, params: CheckoutBillingAddress['CreateRequest']): CheckoutBillingAddress['CreteResponse'] {
    return this.client.post(getCheckoutBillingAddressPath(checkoutId), params);
  }

  update(
    checkoutId: string,
    id: string,
    params: CheckoutBillingAddress['UpdateRequest'],
  ): CheckoutBillingAddress['UpdateResponse'] {
    return this.client.put(getCheckoutBillingAddressPath(checkoutId, id), params);
  }
}
