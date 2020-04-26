import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiFournisseurService {
  urlAP ="http://127.0.0.1/apis_pfe/fournisseur/"
  constructor( private http : HttpClient) { }
  getAllfournisseur():Observable<any>{
    return this.http.get(this.urlAP+"listFr.php");
  }
  getfournisseurByID(id):Observable<any>{
    return this.http.get(this.urlAP+"getfr.php?X="+id);
  }
addfournisseur(nomfourniseur,telephone,email,ville, fax,codepostal,adress):Observable<any>{
  const bod ={nomfourniseur:nomfourniseur,
    telephone:telephone,
    email:email,
    ville:ville,
    fax:fax,
    codepostal:codepostal,
    adress:adress}
  return this.http.post(this.urlAP+"ajouter.php",bod);

}

editfournisseur(idfr ,nomfourniseur,telephone,email,ville, fax,codepostal,adress):Observable<any>{
  const bod ={idfr:idfr , nomfourniseur:nomfourniseur,
    telephone:telephone,
    email:email,
    ville:ville,
    fax:fax,
    codepostal:codepostal,
    adress:adress}
  return this.http.post(this.urlAP+"modifierFr.php",bod);
}
deletefournisseur(idfr):Observable<any>{
    
  return this.http.delete(this.urlAP+"supprimer.php?idfr="+idfr);
}
rechfournisseur(nomfourniseur):Observable<any>{

  return this.http.get(this.urlAP+"rechfournisseur.php?nomfourniseur="+nomfourniseur);
} 

}
