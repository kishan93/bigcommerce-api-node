import { AxiosInstance } from 'axios';

import { getCheckoutsPath } from './Checkouts';
import type { CheckoutCoupon } from './types';

export const getCheckoutCouponPath = (checkoutId: string, id?: string): string =>
  id ? `${getCheckoutsPath(checkoutId)}/coupons/${id}` : `${getCheckoutsPath(checkoutId)}/coupons`;

export class CheckoutCoupons {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  create(checkoutId: string, params: CheckoutCoupon['CreateRequest']): CheckoutCoupon['CreateResponse'] {
    return this.client.post(getCheckoutCouponPath(checkoutId), params);
  }

  delete(checkoutId: string, addressId: string): CheckoutCoupon['DeleteResponse'] {
    return this.client.delete(getCheckoutCouponPath(checkoutId, addressId));
  }
}
