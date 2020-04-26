import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SpecialiteeService } from 'src/app/services/specialitee.service';

@Component({
  selector: 'app-ajouter-specialitee',
  templateUrl: './ajouter-specialitee.component.html'

})
export class AjouterSpecialiteeComponent implements OnInit {
  specialite:any=[];
  libelle:any;
  salairej:any ;
  salairet:any;
libellebox:any;
descriptionbox:any; 
  idtype: any;
  salairej1:any;
  constructor(private service:SpecialiteeService ,private router:Router,private toastr: ToastrService) { } 

  ngOnInit(): void {
this.cleartxtboox();
this.salairj();
  }

refresh(){

this.specialite=[];

}






salairj(){

  this.salairej = (this.salairet/26).toFixed(2);
//this.salairej = Math.round(this.salairej1).toFixed(2);

}




  ajouter() {

    var reg = /^[0-9]+$/;


if (!this.libelle)
{

  this.toastr.error('champ libelle obligatoire!!');
}



else if (this.salairet.match(reg)){

  this.service.ajoutspecialite(this.libelle, this.salairet,this.salairej).subscribe(data => {

    this.specialite=data;
    
    console.log(data);
    console.log(data.RESPONSE);
    
    if (data.RESPONSE == "0"){
      this.specialite=[];
      this.toastr.error('Catégorie ['+this.libelle+'] déjà existante');
    }
    else {
    this.toastr.success('Catégorie ['+this.libelle+'] ajoutée avec success!!');
    }
    
    this.cleartxtboox();
          
        }, error => console.log(error));    



}

else {
  this.toastr.error('champ salaire mensuelle obligatoirement numerique!!');


}

   





  }
  





  retourliste(){

    this.router.navigate(["home/specialitee/liste"]);
  
  
  }






cleartxtboox(){
  
  this.libelle="";
  this.libellebox="";
  this.salairet="";
  this.salairej="";
}












suppspecialiter(idspecialiter) {
  console.log(idspecialiter);
    this.service.deletespecialiter(idspecialiter).subscribe(data => {
      this.toastr.success(data.RESPONSE);
      console.log(data);
      this.refresh();
  },error => console.log(error));
}











}
