import { Component, OnInit } from '@angular/core';
import { ApiStockService } from 'src/app/services/api-stock.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-detail-recpeption',
  templateUrl: './detail-recpeption.component.html',
  styleUrls: ['./detail-recpeption.component.css']
})
export class DetailRecpeptionComponent implements OnInit {
stock:any=[];
  nreception: any;
  idart: any;
  constructor(private service: ApiStockService,private activateroute:ActivatedRoute,private router:Router,private toastr:ToastrService) {  this.nreception = this.activateroute.snapshot.paramMap.get("id");}

  ngOnInit(): void {
    this.refrechdetalprod(this.nreception);
  }
  refrechdetalprod(nreception){
    this.service.refreshart(nreception).subscribe(data=>{
      console.log(data);
      this.stock=(data);
        },error=>console.log(error));


}

codeart(codearticle){
   
  this.idart=codearticle;
 
   }

   delete(idart){
    console.log(idart);
    this.service.deletearticle(idart,this.nreception).subscribe(data=>{
      console.log(data);
      this.toastr.success(data.RESPONSE);
      this.refrechdetalprod(this.nreception);
    },error=>console.log(error));
  }

retour(){
  this.router.navigate(["home/stock/all"]);


}

  } 