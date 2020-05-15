import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { until } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class ApiArticleService {

  urlAP ="http://127.0.0.1/apis_pfe/article/"
  constructor( private http : HttpClient) { }




  
  ajoutarticle(codearticle,libelle,description,type,nature, typestockage, seuil,unite):Observable<any>{
    const body={
      codearticle:codearticle,
      libelle:libelle,
      description:description,
      type:type,
      nature:nature,
      typestockage:typestockage,
      seuil:seuil,
      unite:unite
      
    };
    return this.http.post(this.urlAP+"ajoutarticle.php",body);
    }




    supprimerarticle(codearticle):Observable<any>{
      return this.http.get(this.urlAP+"supprimerarticle.php?codearticle="+codearticle);
    }



    getAllarticle():Observable <any>{
      return this.http.get(this.urlAP+"listearticle.php");
    
  }


  recharticle(codearticle):Observable<any>{

    return this.http.get(this.urlAP+"recharticle.php?codearticle="+codearticle);
  } 


  getarticle(idarticle):Observable<any>{
    
    return this.http.get(this.urlAP+"getarticle.php?id="+idarticle);
  }
  

  editarticle(idarticle,codearticle,libelle,description,type,nature,typestockage,seuil,unite):Observable<any>{
    const body={
      idarticle:idarticle,
      codearticle:codearticle,
      libelle:libelle,
      description:description,
      type:type,
      nature:nature,
      typestockage:typestockage,
      seuil:seuil,
      unite:unite
      
      };
    return this.http.post(this.urlAP+"modifierarticle.php",body);
  }















}
