import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VenteService {
  urlAP ="http://127.0.0.1/apis_pfe/vente/"
  constructor( private http : HttpClient) { }


  prixtotalprod():Observable<any>{
    return this.http.get(this.urlAP+"montanttotalprod.php");
  
  
  }
  


  getprodall():Observable<any>{
    return this.http.get(this.urlAP+"listeprod.php");
  }
  
  rechercheprod(dateprod):Observable<any>{
  
    return this.http.get(this.urlAP+"rechercheprod.php?dateprod="+dateprod);
  } 


  supprimerprod(dateprod):Observable<any>{
    console.log('service:'+dateprod);
    return this.http.get(this.urlAP+"suppprod.php?dateprod="+dateprod);
  } 
  
  /* les service detail vente */  
  rechercheproduit(id_produit):Observable<any>{
  
    return this.http.get(this.urlAP+"rechercheproduit.php?id_produit="+id_produit);
  } 

 
  getproduitall():Observable<any>{
    return this.http.get(this.urlAP+"listeproduit.php");
  }


  prixtotalproduit():Observable<any>{
    return this.http.get(this.urlAP+"montanttotalproduit.php");
  
  
  }


  prixtotalproduitrech(id_produit):Observable<any>{
    return this.http.get(this.urlAP+"montanttotalproduitrech.php?id_produit="+id_produit);
  
  
  }


}
