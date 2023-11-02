import { AxiosInstance } from 'axios';

import { getCheckoutsPath } from './Checkouts';
import type { CheckoutDiscount } from './types';

export const getCheckoutDiscountPath = (checkoutId: string, id?: string): string =>
  id ? `${getCheckoutsPath(checkoutId)}/discounts/${id}` : `${getCheckoutsPath(checkoutId)}/discounts`;

export class CheckoutDiscounts {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  create(checkoutId: string, params: CheckoutDiscount['CreateRequest']): CheckoutDiscount['CreateResponse'] {
    return this.client.post(getCheckoutDiscountPath(checkoutId), params);
  }
}
