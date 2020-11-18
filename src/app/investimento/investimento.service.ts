import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class InvestimentoService {
  token = sessionStorage.getItem('token')
  constructor(
    private http: HttpClient
  ) { }

  consultaInvestimento() {
    const headers = {
      'Authorization': `Bearer ${this.token}`,
      'x-transaction-id': '6e3065eb-f801-4747-a78b-39aac362150e'
    }
    return  this.http.get(`${environment.INVESTIMENTO}`, { headers });
  }


}
