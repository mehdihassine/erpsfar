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
  addproduit(diametre,nom_Produit,coutrevien,prix_vente,description,type_produit):Observable<any>{
    const body={diamaitre:diametre,name:nom_Produit ,prixP:coutrevien,prixV:prix_vente,desc:description,type:type_produit}
    return this.http.post(this.urlAP+"ajoute_produit.php",body);
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
  
}


