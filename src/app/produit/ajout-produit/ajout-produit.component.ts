import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiProduitService } from 'src/app/services/api-produit.service';

@Component({
  selector: 'app-ajout-produit',
  templateUrl: './ajout-produit.component.html'


})
export class AjoutProduitComponent implements OnInit {
  nom_produit: string;diametre:string; prix_produit: string; prix_vente: string; desc: string; type_produit: string;
  
  constructor(private service:ApiProduitService, private router: Router) { }

  ngOnInit(): void {
  }

  
  add() {
    this.service.addproduit(this.diametre,this.nom_produit, this.prix_produit, this.prix_vente, this.desc, this.type_produit).subscribe(data => {
      console.log(data);
      this.router.navigate(["produit/all"])
    }, error => console.log(error));
  }
 
}
