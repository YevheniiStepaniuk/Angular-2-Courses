import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {CartService} from './../../../shared/services';

@Component({
  selector: 'public-cart',
  templateUrl: './public-cart.component.html',
  styleUrls: ['./public-cart.component.scss']
})
export class PublicCartComponent implements OnInit {

  constructor(public publicCartService: CartService,
              private router: Router) {
  }

  ngOnInit() {
  }

  close() {
    this.router.navigate([{outlets: {popup: null}}]);
    this.publicCartService.isDisplayed = false;
  }

  deleteCartItem(id: number): void {
    this.publicCartService.remove(id);
  }
}
