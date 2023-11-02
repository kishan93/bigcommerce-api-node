import { AxiosInstance } from 'axios';

import { getCheckoutsPath } from './Checkouts';
import type { CheckoutConsignment } from './types';

export const getCheckoutConsignmentPath = (checkoutId: string, id?: string): string =>
  id ? `${getCheckoutsPath(checkoutId)}/consignments/${id}` : `${getCheckoutsPath(checkoutId)}/consignments`;

export class CheckoutConsignments {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  create(checkoutId: string, params: CheckoutConsignment['CreateRequest']): CheckoutConsignment['CreateResponse'] {
    return this.client.post(getCheckoutConsignmentPath(checkoutId), params);
  }

  update(
    checkoutId: string,
    addressId: string,
    params: CheckoutConsignment['UpdateRequest'],
  ): CheckoutConsignment['UpdateResponse'] {
    return this.client.put(getCheckoutConsignmentPath(checkoutId, addressId), params);
  }

  delete(checkoutId: string, addressId: string): CheckoutConsignment['DeleteResponse'] {
    return this.client.delete(getCheckoutConsignmentPath(checkoutId, addressId));
  }
}
