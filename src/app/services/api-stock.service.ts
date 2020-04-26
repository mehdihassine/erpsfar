import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiStockService {
  urlAP ="http://127.0.0.1/apis_pfe/stock/"
  constructor(private http : HttpClient) { }
 


  getallarticle():Observable <any>{
    return this.http.get(this.urlAP+"getallarticle.php")
  }












  
}
