import { Component, OnInit } from '@angular/core';
import { ApiStockService } from 'src/app/services/api-stock.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-liste-sortie',
  templateUrl: './liste-sortie.component.html',
  styleUrls: ['./liste-sortie.component.css']
})
export class ListeSortieComponent implements OnInit {
stock:any={};
datesortie:any;
  constructor(private service: ApiStockService , private router : Router,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.refresh();
  }
  refresh(){
    this.service.getarticleall().subscribe(data=>{
      console.log(data); 
      if(data.resp){
        this.stock=[];
        this.toastr.warning("liste reception vide !! ");
      
      }
      else{
    this.stock=data ; 
      }
    },error=> console.log (error));

  }




  rechsortie(){
    this.service.recherchesortie(this.datesortie).subscribe(data => {
      console.log("recherche : "+this.datesortie);
      this.stock=[];
      this.stock=(data);
      console.log(data);
  var responserecherche = data[0].respo;
  
  if(responserecherche === "erreursortie"){
    alert('Commande [ '+this.datesortie+' ] introuvable');
    this.refresh();
    console.log("retour liste");
  }
  this.datesortie="";
  
    }, error => console.log(error));
  }
  affliste(){
    this.refresh();
  }
  nouveau(){
    this.router.navigate(["home/stock/sortie"]);
  }
}
