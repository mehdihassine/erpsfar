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
  addproduit(diametre,nom,cout,vente,type,description,tva):Observable<any>{
    const body={
      diametre:diametre,
       nom:nom ,
       cout:cout,
       vente:vente,
       type:type,
       description:description,
       tva:tva
        }
    return this.http.post(this.urlAP+"ajouterproduit.php",body);
  }
  deleteproduit(id):Observable<any>{
    
    return this.http.delete(this.urlAP+"supprimer_produit.php?X="+id);
  }

editproduit( idProduit,diametre,nomProduit,coutrevien,prixvente,descriptionProduit,typeProduit_id):Observable<any>{
    const body={idProduit: idProduit,
      diametre:diametre,
      nomProduit:nomProduit ,
      coutrevien:coutrevien,
      prixvente:prixvente,
      descriptionProduit:descriptionProduit,
      type:typeProduit_id};
    console.log(body);
    return this.http.post(this.urlAP+"modifier_produit.php",body);
  }
  


  getAllgategorie():Observable<any>{
    return this.http.get(this.urlAP+"listcategorie.php");
  }







}


