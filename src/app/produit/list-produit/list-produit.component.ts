import { Component, OnInit } from '@angular/core';
import { ApiProduitService } from 'src/app/services/api-produit.service';


@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html'

})
export class ListProduitComponent implements OnInit {
produit :any[]
article:any[]
  constructor(private service :ApiProduitService ) { }

  ngOnInit(): void {
    this.refresh();
    
  }
  refresh(){
    this.service.getAllproduit().subscribe(data=>{
      console.log(data); 
    this.produit=data ; 
    },error=> console.log (error));
    
  }
  delete(id){
    this.service.deleteproduit(id).subscribe(data=>{
      console.log(data);
      this.refresh();
    },error=>console.log(error));
  }
  





}