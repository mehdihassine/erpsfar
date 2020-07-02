import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VenteService {
  urlAP ="http://127.0.0.1/apis_pfe/vente/";
  urlAP22 = "http://127.0.0.1/apis_pfe/stat/";

  constructor( private http : HttpClient) { }


  prixtotalprod():Observable<any>{
    return this.http.get(this.urlAP+"montanttotalprod.php");
  
  
  }
  
  getStatVente():Observable<any>{
    return this.http.get(this.urlAP22+"vente.php");
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
  rechercheproduit(idproduit):Observable<any>{
  
    return this.http.get(this.urlAP+"rechercheproduit.php?idproduit="+idproduit);
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

  recherchedate(datprod):Observable<any>{
    return  this.http.get(this.urlAP+"rechercheprod.php?datprod="+datprod);
  }



  refreshprod(datprod):Observable<any>{
    return this.http.get(this.urlAP+"refreshart.php?datprod="+datprod);
  }




  beneficetotal(datprod):Observable<any>{
    return this.http.get(this.urlAP+"beneficeproduit.php?datprod="+datprod);
  
  
  }









}
