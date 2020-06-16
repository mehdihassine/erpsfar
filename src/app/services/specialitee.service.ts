import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class SpecialiteeService {

  urlAP ="http://127.0.0.1/apis_pfe/specialiter/"
  constructor(private http : HttpClient) { }








  ajoutspecialite(user){
    
    return this.http.post(this.urlAP+"ajouterspecialite.php",user);
    }



    deletespecialiter(idspecialiter):Observable<any>{
      return this.http.get(this.urlAP+"supprimerspecialiter.php?idspecialiter="+idspecialiter);
  }

  getAllspecicaliter():Observable <any>{
    return this.http.get(this.urlAP+"liste.php");
  
}

supprimerspecialiter(libelle):Observable<any>{
  return this.http.delete(this.urlAP+"suppspecial.php?libelle="+libelle);
}



recherchespecialiter(libelle):Observable<any>{

  return this.http.get(this.urlAP+"recherchespecial.php?libelle="+libelle);
} 



getspecialite(libelle):Observable<any>{
    
  return this.http.get(this.urlAP+"getspecial.php?libelle="+libelle);
}



editspecialiter( idspecialiter,libelle,salairet,salairej):Observable<any>{
  const  body={idspecialiter:idspecialiter,libelle:libelle,salairet:salairet,salairej:salairej};
  console.log(body);
  return this.http.post(this.urlAP+"modifierspecial.php",body);
}





















}
