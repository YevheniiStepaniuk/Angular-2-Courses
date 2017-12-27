import { OrderItem, Order } from './../../../shared/models/order';
import { CartItem } from './../../../shared/models/cartItem';
import { OrderService } from './../../../shared/services/order.service';
import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { CartService } from '../../../shared/services/index';

@Component({
  selector: 'app-process-order',
  templateUrl: './process-order.component.html'
})
export class ProcessOrderComponent implements OnInit {

  customerForm: FormGroup;
  private deliveryCheckboxChecked = true;


  constructor(private fb: FormBuilder,
              private orderService: OrderService,
              private router: Router,
              private publicCartService: CartService) {
  }

  ngOnInit() {
    this.buildForm();
  }


  addPhone(): void {
    this.phones.push(this.buildPhone());
  }

  get phones(): FormArray {
    return <FormArray>this.customerForm.get('phones');
  }

  sendOrder() {
    // free up the cart
    this.publicCartService.clear();

    // save order
    this.publicCartService.getAllAsync().then((value) => {

      this.placeOrderCallback(value);

    });
  }

  clickOnDelivery(event: Event) {
    const addressControl = this.customerForm.get('address');

    this.deliveryCheckboxChecked = !this.deliveryCheckboxChecked;

    if (this.deliveryCheckboxChecked) {
      addressControl.setValidators([Validators.required, Validators.minLength(5)]);
    } else {
      addressControl.clearValidators();
    }
  }

  private buildForm() {
    this.customerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],

      email: [
        '',
        [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+')]
      ],

      phones: this.fb.array([this.buildPhone()]),

      address: ['', [Validators.required, Validators.minLength(5)]],

      deliveryRequired: this.deliveryCheckboxChecked
    });
  }


  private buildPhone(): FormGroup {
    return this.fb.group({
      phone: '',
    });
  }


  private placeOrderCallback(cartItems: CartItem[]) {
    const orderItems = new Array<OrderItem>();

    for (const item of cartItems) {
      orderItems.push(new OrderItem(item.name, item.numberInCart));
    }

    this.orderService.placeOrder(new Order(0, orderItems))
      .subscribe(
        () => {
          this.router.navigate(['admin/orders']);
        },
        error => console.log(error)
      );
  }
}
