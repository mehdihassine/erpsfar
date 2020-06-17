import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SpecialiteeService } from 'src/app/services/specialitee.service';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { Specialite } from 'src/app/models/specialiter';

@Component({
  selector: 'app-ajouter-specialitee',
  templateUrl: './ajouter-specialitee.component.html'

})
export class AjouterSpecialiteeComponent implements OnInit {
  specialite:any=[];
  salairets:any;
libellebox:any;
descriptionbox:any; 
  idtype: any;
  salairej1:any;
  addSpecialite: FormGroup;
  nom: any;
  salairetbox: number;
  constructor(private service:SpecialiteeService ,private router:Router,private toastr: ToastrService, private fb: FormBuilder) {
    let formControls={
      libelle:new FormControl('',Validators.required),
     /// salairej:new FormControl('',Validators.required),
      salairet:new FormControl('',Validators.required),
    }
    this.addSpecialite=this.fb.group(formControls);
   } 

get libelle (){return this.addSpecialite.get('libelle')}
// get salairej(){return  this.addSpecialite.get('salairej')}
get salairet(){return  this.addSpecialite.get('salairet')}

  ngOnInit(): void {
//this.cleartxtboox();
//this.salairj();
  }

refresh(){

this.specialite=[];

}






// salairj(){

//   this.salairej1 = (this.salairetbox/26).toFixed(2);
// //this.salairej = Math.round(this.salairej1).toFixed(2);

// }




  ajouter() {
let data=this.addSpecialite.value;
let user =new Specialite(data.libelle,data.salairet);
  this.nom=data.libelle;

  this.service.ajoutspecialite(user).subscribe(data => {

    this.specialite=data;
    
    console.log(data);
    console.log(data['RESPONSE']);
    
    if (data['RESPONSE'] == "0"){
      this.specialite=[];
      this.toastr.error('Catégorie ['+this.nom+'] déjà existante');
    }
    else {
      this.addSpecialite.reset();
    this.toastr.success('Catégorie ['+this.nom+'] ajoutée avec success!!');
    }
    
    //this.cleartxtboox();
          
        }, error => console.log(error));    



}


   





  
  





  retourliste(){

    this.router.navigate(["home/specialitee/liste"]);
  
  
  }






// cleartxtboox(){
  
//   this.libelle="";
//   this.libellebox="";
//   this.salairet="";
//   this.salairej="";
// }












suppspecialiter(idspecialiter) {
  console.log(idspecialiter);
    this.service.deletespecialiter(idspecialiter).subscribe(data => {
      this.toastr.success(data.RESPONSE);
      console.log(data);
      this.refresh();
  },error => console.log(error));
}











}
