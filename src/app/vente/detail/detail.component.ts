import { Component, OnInit } from '@angular/core';
import { VenteService } from 'src/app/services/vente.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html'

})
export class DetailComponent implements OnInit {
  datprod: any;
  detail :any =[];
benficetotal:any ;
  constructor(private service :VenteService , private router: Router,private toastr:ToastrService,private actactivateroute:ActivatedRoute) { this.datprod = this.actactivateroute.snapshot.paramMap.get("id");}

  ngOnInit(): void {
    this.refrechdetalprod(this.datprod);
    this.prixbenefice(this.datprod);
  }
  refrechdetalprod(datprod){
    this.service.refreshprod(datprod).subscribe(data=>{
      console.log(data);
      this.detail=(data);
     
        },error=>console.log(error));
}
prixbenefice(datprod) {
  this.service.beneficetotal(datprod).subscribe(data7 => {

    this.benficetotal=data7.benficetotal;
    this.benficetotal=this.benficetotal+' TND';
    console.log('ttc = ' + data7.benficetotal);
    }, error => console.log(error));
}



retourlist(){
  this.router.navigate(["home/vente/liste"]);
}
}


  

