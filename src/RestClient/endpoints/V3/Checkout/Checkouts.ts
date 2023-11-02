import { AxiosInstance } from 'axios';

import type { Checkout } from './types';

const checkoutsPath = '/v3/checkouts';

/**
 * Builds a base Checkouts API path given an optional checkout ID
 *
 * @param id
 * @returns Returns '/v3/checkouts/:checkoutId
 */

export const getCheckoutsPath = (id: string): string => `${checkoutsPath}/${id}`;

class Checkouts {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  /**
   * Gets a single checkout by ID
   *
   * @param id The checkout ID
   * @param params Query params used to get checkout
   * @returns Promise resolving to a checkout
   */
  get(id: string, params?: Checkout['GetRequest']): Checkout['GetResponse'] {
    return this.client.get(getCheckoutsPath(id), {
      params,
    });
  }

  /**
   * Updates a checkout's customer message
   * @param id The checkout ID
   * @param message The customer message to update
   * @returns Promise resolving to a checkout
   */
  updateCustomerMessage(id: string, message: string): Checkout['GetResponse'] {
    return this.client.put(`${getCheckoutsPath(id)}`, {
      customer_message: message,
    });
  }
}

export default Checkouts;
