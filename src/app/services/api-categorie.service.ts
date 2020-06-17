import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCategorieService {

 

  urlAP ="http://127.0.0.1/apis_pfe/categorie/"
  constructor( private http : HttpClient) { }




  ajoutCategorie(user){
   
    return this.http.post(this.urlAP+"ajoutercategorie.php",user);
    }



    deletecategorie(idtype):Observable<any>{
      return this.http.delete(this.urlAP+"supprimercategorie.php?idtype="+idtype);
  }

  getAllcategorie():Observable <any>{
    return this.http.get(this.urlAP+"liste.php");
  
}

supprimercategorie(libelle):Observable<any>{
  return this.http.delete(this.urlAP+"suppcategorie.php?libelle="+libelle);
}



recherchecategorie(libelle):Observable<any>{

  return this.http.get(this.urlAP+"recherchecategorie.php?libelle="+libelle);
} 



getcategorie(libelle):Observable<any>{
    
  return this.http.get(this.urlAP+"getcategorie.php?libelle="+libelle);
}



editcategorie( idtype,libelle,description):Observable<any>{
  const body={
    idtype: idtype,
    libelle:libelle,
    description:description ,
    };
  console.log(body);
  return this.http.post(this.urlAP+"modifiercategorie.php",body);
}














 
 


}

