import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiEmployeeService {
  urlAP ="http://127.0.0.1/apis_pfe/employe/"
  constructor( private http : HttpClient) { }


  getAllspecialiter():Observable<any>{
    return this.http.get(this.urlAP+"listspecialiter.php");
  }

  addemploye(nom,prenom,adress,telephone,cin,cnss,typec,specialite):Observable<any>{
    const body={
       nom:nom ,
        prenom:prenom,
        adress:adress,
         telephone:telephone,
         cin:cin,
         cnss:cnss,
         typec:typec,
         specialite:specialite
        }
    return this.http.post(this.urlAP+"ajouteremployer.php",body);
  }


  deleteEmploye(idemploye):Observable<any>{
    
    return this.http.get(this.urlAP+"supprimeremployee.php?idemploye="+idemploye);
  }


  rechidemploye(idemploye):Observable<any>{
    return this.http.get(this.urlAP+"rechidemploye.php?idemploye="+idemploye);
  }

  rechtypec(typec):Observable<any>{
    return this.http.get(this.urlAP+"rechtypec.php?typec="+typec);
  }


  rechspecialiter(specialiter):Observable<any>{
    return this.http.get(this.urlAP+"rechspecialiter.php?specialiter="+specialiter);
  }

  rechspecialitertypec(specialiter,typec):Observable<any>{
    return this.http.get(this.urlAP+"rechspecialitertypec.php?specialiter="+specialiter+"&typec="+typec);}












  getAllEmploye():Observable<any>{
    return this.http.get(this.urlAP+"listEm.php");
  }
  getEmployeByID(idemploye):Observable<any>{
    return this.http.get(this.urlAP+"getem.php?idemploye="+idemploye);
  }






  
 
  editEmploye (idemployee,nom, prenom, adress, telephone, cin,cnss, typec,specialite):Observable<any>{
    const body={idemployee:idemployee,
      nom:nom,
      prenom:prenom ,
      adress:adress, 
         telephone:telephone ,
         cin:cin,
         cnss:cnss,
         typec:typec,
         specialite:specialite
        }
    return this.http.post(this.urlAP+"modifierEm.php",body);
  }


}