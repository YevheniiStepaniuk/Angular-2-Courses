import { CartItem } from './cart-item.model';
export class Order {
  public items: Array<CartItem>;
  public price: number;

  constructor(items?: CartItem[]) {
    if (!items) {
      return;
    }
    this.items = items;
    this.calulatePrice();
  }

  public calulatePrice() {
    if (!this.items) {
      return;
    }
    this.price = this.items.map((item: CartItem) => item.count * item.product.price).reduce((a, b) => a + b, 0);
  }
}
