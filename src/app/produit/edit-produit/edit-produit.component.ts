import { Component, OnInit } from '@angular/core';
import { ApiProduitService } from 'src/app/services/api-produit.service';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'protractor';

@Component({
  selector: 'app-edit-produit',
  templateUrl: './edit-produit.component.html',
  styleUrls: ['./edit-produit.component.css']
})
export class EditProduitComponent implements OnInit {
  table:any={};
  id: any;
  nomProduit: any;
  diametre: any;
  coutrevien: any;
  prixvente: any;
  descriptionProduit: any;
  table2:any={}; 
  typeProduit_id: any;
  constructor(private service: ApiProduitService, private activateroute: ActivatedRoute, private router: Router) {
    
    this.id = this.activateroute.snapshot.paramMap.get("id");
  }


 


  ngOnInit(): void {
    this.service.getProduitByID(this.id).subscribe(data => {
      this.table = data[0];
      console.log(JSON.stringify(this.table));
      console.log(this.table);
    }, error => console.log(error));
  }



  edit(id) {
    
    if (this.id) { this.table.id = this.id }
    if (this.nomProduit) { this.table.nomProduit = this.nomProduit }
    if (this.diametre) { this.table.diametre = this.diametre }
    if (this.coutrevien) { this.table.coutrevien = this.coutrevien }
    if (this.prixvente) { this.table.prixvente = this.prixvente }
    if (this.descriptionProduit) { this.table.descriptionProduit = this.descriptionProduit }
    if (this.typeProduit_id) { this.table.typeProduit_id = this.typeProduit_id }

    this.service.editproduit(this.table.id,this.table.diametre,this.table.nomProduit,
      this.table.coutrevien,this.table.prixvente,this.table.descriptionProduit,this.table.typeProduit_id).subscribe(data => {
      console.log(this.table.nomProduit);
      console.log(this.table);
      console.log(data.RESPONSE);

      this.router.navigate(["produit/all"]);
    }, error => console.log(error));
  }


         



  retouliste() {
    this.router.navigate(["produit/all"]);
  }


  delete(id) {
    this.service.deleteproduit(id).subscribe(data => {

      console.log(data);
      this.retouliste();
      alert('Confirmer suppression Produit [' + this.table.nom_produit + '] ?');
    }, error => console.log(error));
  }

}