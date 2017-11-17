import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartItem } from '../../../shared/models/cart-item.model';

@Component({
  selector: 'cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})

export class CartItemComponent implements OnInit {
  @Input() model: CartItem;
  // @Output() countChange: EventEmitter<CartItem> = new EventEmitter();
  constructor() { }

  ngOnInit() { }

}
