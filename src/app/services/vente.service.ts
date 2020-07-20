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

// service mta3 montent total production 
  prixtotalprod():Observable<any>{
    return this.http.get(this.urlAP+"montanttotalprod.php");
  
  
  }
  //service statestisque 
  getStatVente():Observable<any>{
    return this.http.get(this.urlAP22+"vente.php");
  }
//service affiche tout les produit de production
  getprodall():Observable<any>{
    return this.http.get(this.urlAP+"listeprod.php");
  }
  //service rechereche 
  rechercheprod(dateprod):Observable<any>{
  
    return this.http.get(this.urlAP+"rechercheprod.php?dateprod="+dateprod);
  } 

//service supprimer
  supprimerprod(idvente):Observable<any>{
    console.log('service:'+idvente);
    return this.http.get(this.urlAP+"suppprod.php?idvente="+idvente);
  } 
  
  /* les service detail vente */  

  rechercheproduit(idproduit):Observable<any>{
  
    return this.http.get(this.urlAP+"rechercheproduit.php?idproduit="+idproduit);
  } 

 
  getproduitall():Observable<any>{
    return this.http.get(this.urlAP+"listeproduit.php");
  }

//service montant total de produit dans le production 
  prixtotalproduit():Observable<any>{
    return this.http.get(this.urlAP+"montanttotalproduit.php");
  
  
  }


  prixtotalproduitrech(id_produit):Observable<any>{
    return this.http.get(this.urlAP+"montanttotalproduitrech.php?id_produit="+id_produit);
  
  
  }

  recherchedate(datprod):Observable<any>{
    return  this.http.get(this.urlAP+"rechercheprod.php?datprod="+datprod);
  }


//service affichagee detail vente 
  refreshprod(datprod):Observable<any>{
    return this.http.get(this.urlAP+"refreshart.php?datprod="+datprod);
  }



//service calculer le benfice total de production
  beneficetotal(datprod):Observable<any>{
    return this.http.get(this.urlAP+"beneficeproduit.php?datprod="+datprod);
  
  
  }









}
