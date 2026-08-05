import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';

@Component({
  selector: 'app-header',
  imports: [MatIconModule,MatButtonModule,MatBadgeModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {}
