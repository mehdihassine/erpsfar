import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FactureService {

 
 



  urlAP ="http://127.0.0.1/apis_pfe/facture/"
  constructor( private http : HttpClient) { }



  
//service detail div

  getnumdiver(): Observable<any> {
    return this.http.get(this.urlAP + "getnumdiver.php");
  }

  montanttotaldivers(nfacture): Observable<any> {
    return this.http.get(this.urlAP + "montanttotaldiver.php?nfacture="+nfacture);
  }


  getartdiver(nfacture): Observable<any> {
    return this.http.get(this.urlAP + "getartdiver.php?nfacture="+nfacture);
  }


  addarticlediver(nfacture, nligne1, description, montant): Observable<any> {
    const body = {
      nfacture: nfacture,
      nligne: nligne1,
      description: description,
      montant: montant
     
      
    }
    return this.http.post(this.urlAP + "addartdiver.php", body);
  }


  supprimerartdiver(nfacture,nligne1):Observable<any>{
    console.log('service:'+nfacture+' '+nligne1);
    return this.http.get(this.urlAP+"suppartdiver.php?nfacture="+nfacture+"&nligne="+nligne1);
  } 

  annulerfacturediver(nfacture):Observable<any>{
    return this.http.get(this.urlAP+"suppfacturediver.php?nfacture="+nfacture);
  } 

  validerfacturediver(nfacture):Observable<any>{
    return this.http.get(this.urlAP+"validerfacturediver.php?nfacture="+nfacture);
  } 

  getfactureall():Observable<any>{
    return this.http.get(this.urlAP+"listefacture.php");
  
  }


 
  sumpiedfacturediver(nfacture): Observable<any> {
    return this.http.get(this.urlAP + "piedfacturediver.php?nfacture="+nfacture);
  }



  prixtotalfacturediver(nfacture): Observable<any> {
    return this.http.get(this.urlAP + "montanttotalfacturediver.php?nfacture="+nfacture);
  }



//service detail achat

sumpiedfactureachat(nfacture): Observable<any> {
  return this.http.get(this.urlAP + "piedfactureachat.php?nfacture="+nfacture);
}
prixtotalfactureachat(nfacture): Observable<any> {
  return this.http.get(this.urlAP + "montanttotalfactachat.php?nfacture="+nfacture);
}

getartfactureachat(nfacture): Observable<any> {
  return this.http.get(this.urlAP + "getartfactureachat.php?nfacture="+nfacture);
}


























//sericde detail vente

  getnumfacture(): Observable<any> {
    return this.http.get(this.urlAP + "getnumfacture.php");
  }


  prixtotalfacture(nfacture): Observable<any> {
    return this.http.get(this.urlAP + "montanttotalfacture.php?nfacture="+nfacture);
  }


  getartfacture(nfacture): Observable<any> {
    return this.http.get(this.urlAP + "getartfacture.php?nfacture="+nfacture);
  }


  sumpiedfacture(nfacture): Observable<any> {
    return this.http.get(this.urlAP + "piedfacture.php?nfacture="+nfacture);
  }



  addarticlefacture(nfacture, nligne1, codarticle, quantite, nomclient, adresse): Observable<any> {
    const body = {
      nfacture: nfacture,
      nligne: nligne1,
      codarticle: codarticle,
      quantite: quantite,
      nomclient:nomclient,
      adresse: adresse
      
    }
    return this.http.post(this.urlAP + "addartfacture.php", body);
  }


  supprimerartfacture(nfacture,nligne1):Observable<any>{
    console.log('service:'+nfacture+' '+nligne1);
    return this.http.get(this.urlAP+"suppartfacture.php?nfacture="+nfacture+"&nligne="+nligne1);
  } 




  annulerfacture(nfacture):Observable<any>{
    return this.http.get(this.urlAP+"suppfacture.php?nfacture="+nfacture);
  } 





  validerfacture(nfacture):Observable<any>{
    return this.http.get(this.urlAP+"validerfacture.php?nfacture="+nfacture);
  } 
  

  verifefacture(nfacture):Observable<any>{
    return this.http.get(this.urlAP+"verifefacture.php?nfacture="+nfacture);
  } 


  verifefacturediver(nfacture):Observable<any>{
    return this.http.get(this.urlAP+"verifefacturediver.php?nfacture="+nfacture);
  } 
 
















































}


