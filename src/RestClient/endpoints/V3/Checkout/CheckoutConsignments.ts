import { AxiosInstance } from 'axios';

import { getCheckoutsPath } from './Checkouts';
import type { CheckoutConsignment } from './types';

export const getCheckoutConsignmentPath = (
  checkoutId: string,
  id?: string | null,
  params?: CheckoutConsignment['RequestPrarams'],
): string => {
  const query = params ? new URLSearchParams(params).toString() : '';

  return id
    ? `${getCheckoutsPath(checkoutId)}/consignments/${id}?${query}`
    : `${getCheckoutsPath(checkoutId)}/consignments?${query}`;
};

export class CheckoutConsignments {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  create(
    checkoutId: string,
    data: CheckoutConsignment['CreateRequest'],
    params: CheckoutConsignment['RequestPrarams'] = {},
  ): CheckoutConsignment['CreateResponse'] {
    return this.client.post(getCheckoutConsignmentPath(checkoutId, null, params), data);
  }

  update(
    checkoutId: string,
    addressId: string,
    data: CheckoutConsignment['UpdateRequest'],
    params: CheckoutConsignment['RequestPrarams'] = {},
  ): CheckoutConsignment['UpdateResponse'] {
    return this.client.put(getCheckoutConsignmentPath(checkoutId, addressId, params), data);
  }

  delete(
    checkoutId: string,
    addressId: string,
    params: CheckoutConsignment['RequestPrarams'] = {},
  ): CheckoutConsignment['DeleteResponse'] {
    return this.client.delete(getCheckoutConsignmentPath(checkoutId, addressId, params));
  }
}
