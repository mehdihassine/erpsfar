import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalairesService {
  urlAP ="http://127.0.0.1/apis_pfe/salaire/"
  constructor(private http:HttpClient) { }



  getmat():Observable<any>{
    return this.http.get(this.urlAP+"getmatricule.php");
    
  }
  addfiche(matricule,nbjour,nbferier,primepresence,primepanier,
    Conge,salairebrute,cnss,irp,payee):Observable<any>{
      const body ={
        matricule:matricule,
        nbjour:nbjour,
        nbferier:nbferier,
        primepresence:primepresence,
        primepanier:primepanier, 
        conge:Conge,
        salairebrute:salairebrute, 
        cnss:cnss, 
        irp:irp,
        payee:payee
      };
      return this.http.post(this.urlAP+"ajoutfiche.php",body);
    }

    getAllfiche():Observable<any>{
      return this.http.get(this.urlAP+"listsalaire.php");
    }
    deleteEmploye(id):Observable<any>{
    
      return this.http.get(this.urlAP+"supprimer_fiche.php?X="+id);
    }
    rechidemploye(idemploye):Observable<any>{
      return this.http.get(this.urlAP+"rechidemploye.php?idemploye="+idemploye);
    }
    rechetat(etat):Observable<any>{
      return this.http.get(this.urlAP+"rechetat.php?etat="+etat);
    }
    rechsalaire(etat,idemploye):Observable<any>{
      return this.http.get(this.urlAP+"rechsalaire.php?idemploye="+idemploye+"&etat="+etat);
    }


      refrech(idsalaire):Observable<any>{
        return this.http.get(this.urlAP+"getfiches.php?idsalaire="+idsalaire);}
}
