import { Component, OnInit } from '@angular/core';
import { ApiStockService } from 'src/app/services/api-stock.service';

@Component({
  selector: 'app-liste-stock',
  templateUrl: './liste-stock.component.html'
  
})
export class ListeStockComponent implements OnInit {
reception: any[]
  constructor(private service :ApiStockService) { }

  ngOnInit(): void {
  
  this.refresh();
  }
  
 refresh(){
   /* this.service.getallreception().subscribe(data=>{
      console.log(data); 
    this.reception=data ; 
    },error=> console.log(error));*/
    
  }
  supprime(id){
  /*  this.service.deletereception(id).subscribe(data=>{
      console.log(data)
      this.refresh();
    },error=>console.log(error));
  }*/
  
}
}