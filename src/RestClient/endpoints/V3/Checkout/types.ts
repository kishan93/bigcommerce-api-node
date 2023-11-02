import { operations } from '../../../../generate/generated/checkouts.v3';
import { AxiosPromise } from '../../../../types';

export interface Checkout {
  GetRequest: operations['CheckoutsByCheckoutIdGet']['parameters']['query'];
  GetResponse: AxiosPromise<operations['CheckoutsByCheckoutIdGet']['responses']['200']['content']['application/json']>;
}

export interface CheckoutBillingAddress {
  CreateRequest: operations['CheckoutsBillingAddressByCheckoutIdPost']['requestBody']['content']['application/json'];
  CreteResponse: AxiosPromise<
    operations['CheckoutsBillingAddressByCheckoutIdPost']['responses']['200']['content']['application/json']
  >;

  UpdateRequest: operations['CheckoutsBillingAddressByCheckoutIdAndAddressIdPut']['requestBody']['content']['application/json'];
  UpdateResponse: AxiosPromise<
    operations['CheckoutsBillingAddressByCheckoutIdAndAddressIdPut']['responses']['200']['content']['application/json']
  >;
}

export interface CheckoutConsignment {
  CreateRequest: operations['CheckoutsConsignmentsByCheckoutIdPost']['requestBody']['content']['application/json'];
  CreateResponse: AxiosPromise<
    operations['CheckoutsConsignmentsByCheckoutIdPost']['responses']['200']['content']['application/json']
  >;

  UpdateRequest: operations['CheckoutsConsignmentsByCheckoutIdAndConsignmentIdPut']['requestBody']['content']['application/json'];
  UpdateResponse: AxiosPromise<
    operations['CheckoutsConsignmentsByCheckoutIdAndConsignmentIdPut']['responses']['200']['content']['application/json']
  >;

  DeleteResponse: AxiosPromise<
    operations['CheckoutsConsignmentsByCheckoutIdAndConsignmentIdDelete']['responses']['200']['content']['application/json']
  >;
}

export interface CheckoutCoupon {
  CreateRequest: operations['CheckoutsCouponsByCheckoutIdPost']['requestBody']['content']['application/json'];
  CreateResponse: AxiosPromise<
    operations['CheckoutsCouponsByCheckoutIdPost']['responses']['200']['content']['application/json']
  >;

  DeleteResponse: AxiosPromise<
    operations['CheckoutsCouponsByCheckoutIdAndCouponCodeDelete']['responses']['200']['content']['application/json']
  >;
}

export interface CheckoutDiscount {
  CreateRequest: operations['post-store_hash-v3-checkouts-checkoutId-discounts']['requestBody']['content']['application/json'];
  CreateResponse: AxiosPromise<
    operations['post-store_hash-v3-checkouts-checkoutId-discounts']['responses']['200']['content']['application/json']
  >;
}

export interface CheckoutOrder {
  CreateResponse: AxiosPromise<operations['createAnOrder']['responses']['200']['content']['application/json']>;
}
