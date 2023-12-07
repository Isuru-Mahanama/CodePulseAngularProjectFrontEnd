import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css',
  
})
export class PipesComponent {
  birthday = new Date(1997,7,28);
  currencyValue = new CurrencyPipe('30');
  channel ={
    currency :1000,
    decimalNumber:369.902,
  }
}
