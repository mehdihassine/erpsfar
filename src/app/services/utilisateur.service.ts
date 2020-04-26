import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  urlAP ="http://127.0.0.1/apis_pfe/utilisateur/"
  constructor( private http : HttpClient) { }
  
  
  
  
  ajoutuser(nomuser,prenomuser,email,loginuser,mdpuser,role):Observable<any>{
    const body={
      nomuser:nomuser,
      prenomuser:prenomuser,
      email:email,
      loginuser:loginuser,
      mdpuser:mdpuser,
      role:role
    }
    return this.http.post(this.urlAP+"ajoututilisateur.php",body); 
  }
  getAlluser():Observable <any>{
    return this.http.get(this.urlAP+"listeuser.php");
  
}

supprimeruser(loginuser):Observable<any>{
  return this.http.get(this.urlAP+"supprimerlogin.php?loginuser="+loginuser)
}

getprofil(iduser):Observable<any>{
  return this.http.get(this.urlAP+"getutilisateur.php?iduser="+iduser)

}
updateuser(iduser,nom,prenom,login,mail,mdp,photo):Observable<any>{
const body ={
  iduser:iduser,
  nom:nom,
  prenom:prenom,
  login:login,
  mail:mail,
  mdp:mdp,
  photo:photo
}
return this.http.post(this.urlAP+"updateutilisateur.php",body);


}



}
