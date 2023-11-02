import { AxiosInstance } from 'axios';

import { CheckoutBillingAddresses } from './CheckoutBillingAddresses';
import { CheckoutConsignments } from './CheckoutConsignments';
import { CheckoutCoupons } from './CheckoutCoupons';
import { CheckoutDiscounts } from './CheckoutDiscounts';
import { CheckoutOrders } from './CheckoutOrders';
import Checkouts from './Checkouts';

class CheckoutV3 {
  public checkouts: Checkouts;
  public checkoutBillingAddress: CheckoutBillingAddresses;
  public checkoutConsegnments: CheckoutConsignments;
  public checkoutCoupons: CheckoutCoupons;
  public checkoutDiscounts: CheckoutDiscounts;
  public checkoutOrders: CheckoutOrders;

  constructor(client: AxiosInstance) {
    this.checkouts = new Checkouts(client);
    this.checkoutBillingAddress = new CheckoutBillingAddresses(client);
    this.checkoutConsegnments = new CheckoutConsignments(client);
    this.checkoutCoupons = new CheckoutCoupons(client);
    this.checkoutDiscounts = new CheckoutDiscounts(client);
    this.checkoutOrders = new CheckoutOrders(client);
  }
}

export default CheckoutV3;
