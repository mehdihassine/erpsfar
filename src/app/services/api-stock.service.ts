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




  getAllfournisseur():Observable<any>{
    return this.http.get(this.urlAP+"listfournisseur.php");
  }


  getarticle():Observable<any>{
    return this.http.get(this.urlAP+"listarticle.php");
  }

  getartreception(nreception): Observable<any> {
    return this.http.get(this.urlAP + "getartreception.php?nreception="+nreception);
  }
  addreception(nreception,nligne1,codarticle,quantite,type,fournisseur,prixachat,datefinv,remise,taxe,description):Observable<any>{
    const body={
      nreception:nreception,
      nligne1:nligne1,
      codarticle:codarticle,
      quantite:quantite,
      fournisseur:fournisseur,
      prixachat:prixachat,
      remise:remise,
      taxe:taxe,
      datefinv:datefinv,
      type:type,
      description:description
    }
    return this.http.post(this.urlAP + "addreception.php", body);
  }
  getnumreception(): Observable<any> {
    return this.http.get(this.urlAP + "getnumreception.php");
  }
  supprimerartreception(nreception,nligne1):Observable<any>{
    console.log('service:'+nreception+' '+nligne1);
    return this.http.get(this.urlAP+"suppartreception.php?nreception="+nreception+"&nligne="+nligne1);
  } 
  annulerreception(nreception):Observable<any>{
    return this.http.get(this.urlAP+"suppreception.php?nreception="+nreception);
  } 




  validerreception(nreception):Observable<any>{
    return this.http.get(this.urlAP+"validerreception.php?nreception="+nreception);
  } 
  

  verifereception(nreception):Observable<any>{
    return this.http.get(this.urlAP+"verifereception.php?nreception="+nreception);
  } 

 











}


  

 