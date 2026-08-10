import { CurrencyPipe } from '@angular/common';
import { CartService } from './../../../core/services/cart-service';
import { Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatInput } from '@angular/material/input';
import { MatFormField, MatLabel } from '@angular/material/select';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-order-summary',
  imports: [MatButton,RouterLink,MatFormField,MatLabel,MatInput,CurrencyPipe],
  templateUrl: './order-summary.html',
  styleUrl: './order-summary.css',
})
export class OrderSummary {
  cartService = inject(CartService);
}
