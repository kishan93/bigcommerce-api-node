import { AxiosInstance } from 'axios';

import CartsV3 from './Cart';
import CatalogV3 from './Catalog';
import CheckoutV3 from './Checkout';
import CustomersV3 from './Customers';
import ThemesV3 from './Themes';

class V3 {
  private client: AxiosInstance;

  public catalog: CatalogV3;
  public carts: CartsV3;
  public checkouts: CheckoutV3;
  public customers: CustomersV3;
  public themes: ThemesV3;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.catalog = new CatalogV3(this.client);
    this.carts = new CartsV3(this.client);
    this.checkouts = new CheckoutV3(this.client);
    this.customers = new CustomersV3(this.client);
    this.themes = new ThemesV3(this.client);
  }
}

export default V3;
