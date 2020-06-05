import { Component, OnInit } from '@angular/core';
import { ApiStockService } from 'src/app/services/api-stock.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-detail-sortie',
  templateUrl: './detail-sortie.component.html',
  styleUrls: ['./detail-sortie.component.css']
})
export class DetailSortieComponent implements OnInit {

  stock:any=[];
  datesortie: any;
  idart: any;
  constructor(private service: ApiStockService,private activateroute:ActivatedRoute,private router:Router,private toastr:ToastrService) 
  {  this.datesortie = this.activateroute.snapshot.paramMap.get("ids");}

  ngOnInit(): void {
    this.refrechdetalprod(this.datesortie);
  }
  refrechdetalprod(datesortie){
    this.service.refart(datesortie).subscribe(data=>{
      console.log(data);
      this.stock=(data);
        },error=>console.log(error));


}

codeart(codearticle){
   
  this.idart=codearticle;
 
   }

   delete(idart){
    console.log(idart);
    this.service.deletearticlesortie(idart,this.datesortie).subscribe(data=>{
      console.log(data);
      this.toastr.success(data.RESPONSE);
      this.refrechdetalprod(this.datesortie);
    },error=>console.log(error));
  }

retour(){
  this.router.navigate(["home/stock/sorti"]);


}

  } 