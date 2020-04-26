import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiProductionService {
  urlAP ="http://127.0.0.1/apis_pfe/production/"
  constructor( private http : HttpClient) { }

 /* getnumproduction():Observable<any>{
    return this.http.get(this.urlAP+"getnumprod.php");
  } */



addartproduction(dateprod,nligne1,codarticle,quantite):Observable<any>{
  const body={
    dateprod:dateprod,
    nligne1:nligne1,
    idproduit:codarticle,
    qteproduction:quantite}
  return this.http.post(this.urlAP+"addartprod.php",body);
} 




supprimerartprod(dateprod,nligne1):Observable<any>{
  console.log('service:'+dateprod+' '+nligne1);
  return this.http.get(this.urlAP+"suppartprod.php?dateprod="+dateprod+"&nligne="+nligne1);
} 



prixtotalprod(dateprod):Observable<any>{
  return this.http.get(this.urlAP+"montanttotalprod.php?dateprod="+dateprod);


}




getartprod(dateprod):Observable<any>{
  return this.http.get(this.urlAP+"getartprod.php?dateprod="+dateprod);
} 



validerprod(dateprod):Observable<any>{
  return this.http.get(this.urlAP+"validercdv.php?id="+dateprod);
} 



annulerprod(dateprod):Observable<any>{
  return this.http.get(this.urlAP+"suppprod.php?dateprod="+dateprod);
} 

getprodall():Observable<any>{
  return this.http.get(this.urlAP+"listeprod.php");

}

supprimerprod(dateprod):Observable<any>{
  console.log('service:'+dateprod);
  return this.http.get(this.urlAP+"suppprod.php?dateprod="+dateprod);
} 

  
rechercheprod(dateprod):Observable<any>{

  return this.http.get(this.urlAP+"rechercheprod.php?dateprod="+dateprod);
} 

/*
resteprod(dateprod,idproduit,qterestant,qterejeter):Observable<any>{
  return this.http.get(this.urlAP+"restprod.php?dateprod="+dateprod+'&idproduit='+idproduit+'&qterestant='+qterestant+'&qterejeter='+qterejeter);
} 
*/
updaterest(dateprod):Observable<any>{
  return this.http.get(this.urlAP+"updaterest.php?dateprod="+dateprod);
}


updateligneprod(dateprod,nligne,idproduit,qteprod,qterestant,qterejeter):Observable<any>{
  console.log('dateprod:'+dateprod);
  console.log('nligne:'+nligne);
  console.log('qterestant:'+qterestant);
  console.log('qterejeter:'+qterejeter);
  console.log('idproduit:'+idproduit);
  console.log('qteprod:'+qteprod);


  return this.http.get(this.urlAP+"restprod.php?dateprod="+dateprod+'&nligne='+nligne+'&qterestant='+qterestant+'&qterejeter='+qterejeter+'&idproduit='+idproduit+'&qteprod='+qteprod);
} 


getlastligne(dateprod):Observable<any>{
  return this.http.get(this.urlAP+"getlastligne.php?dateprod="+dateprod);
}

refreshprod(dateprod):Observable<any>{
  return this.http.get(this.urlAP+"refreshprod.php?dateprod="+dateprod);
}



  
}
