import { Injectable } from '@angular/core';
import { Currency } from './../models/currency';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CurrencyService {
  constructor(private http: HttpClient) {}

  getRates(): Observable<Currency[]> {
    return this.http
      .get<any>('https://api.fixer.io/latest?base=USD')
      .map(result => {
        return Object.keys(result.rates).map((key, index) => {
          return { code: key, value: result.rates[key] };
        });
      });
  }
}
