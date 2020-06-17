import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiProduitService {

  urlAP ="http://127.0.0.1/apis_pfe/produits/"
  constructor( private http : HttpClient) { }
  getAllproduit():Observable <any>{
    return this.http.get(this.urlAP+"liste_produit.php");
  }
  getProduitByID(id):Observable<any>{ 
    
    return this.http.get(this.urlAP+"get.php?X="+id);
  }
  addproduit(user){
   
    return this.http.post(this.urlAP+"ajouterproduit.php",user);
  }
  deleteproduit(id):Observable<any>{
    
    return this.http.get(this.urlAP+"supprimer_produit.php?X="+id);
  }

editproduit( idProduit,diametre,nomProduit,coutrevien,prixvente,descriptionProduit,type,tva):Observable<any>{
    const body={idProduit: idProduit,
      diametre:diametre,
      nomProduit:nomProduit ,
      coutrevien:coutrevien,
      prixvente:prixvente,
      descriptionProduit:descriptionProduit,
      type:type,
    tva:tva};
    console.log(body);
    return this.http.post(this.urlAP+"modifier_produit.php",body);
  }
  


  getAllgategorie():Observable<any>{
    return this.http.get(this.urlAP+"listcategorie.php");
  }

  rechnom(nom):Observable<any>{
    return this.http.get(this.urlAP+"rechnom.php?nom="+nom);
  }

  rechtype(type):Observable<any>{
    return this.http.get(this.urlAP+"rechtype.php?type="+type);
  }





}


