import { Component, OnInit } from '@angular/core';
import{ApiCategorieService} from 'src/app/services/api-categorie.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Categorie } from 'src/app/models/categorie';
 
@Component({
  selector: 'app-ajout-categorie',
  templateUrl: './ajout-categorie.component.html'
 
})
export class AjoutCategorieComponent implements OnInit {
  categorie:any=[]; 
  // libelle:any;
  // description:string;
nom:any;
descriptionbox:any; 
  idtype: any;
  addCategorie: FormGroup;
  constructor(private service:ApiCategorieService ,private router:Router,private toastr: ToastrService,private fb: FormBuilder) {
    let forControls={
      libelle :  new FormControl('', [Validators.required, Validators.minLength(3)]),
      description :   new FormControl('', Validators.required),
    }
    this.addCategorie=this.fb.group(forControls)
   } 

   get libelle(){return this.addCategorie.get('libelle')}
   get description(){return this.addCategorie.get('description')}
  ngOnInit(): void {
//this.cleartxtboox();

  }

refresh(){

this.categorie=[];

}















  ajouter() {

    
    let data=this.addCategorie.value;
    let user =new Categorie(data.libelle,data.description);
this.nom=data.libelle; 
  this.service.ajoutCategorie(user).subscribe(data => {

    this.categorie=data;
    
    console.log(data);
    console.log(data['RESPONSE']);
    
    if (data['RESPONSE'] == "0"){
      this.categorie=[];
      this.toastr.error('Catégorie ['+this.nom+'] déjà existante');
    }
    else {this.addCategorie.reset();
    this.toastr.success('Catégorie ['+this.nom+'] ajoutée avec success!!');
    }
    
    //this.cleartxtboox();
          
        }, error => console.log(error));    







   





  }
  





  retourliste(){

    this.router.navigate(["home/categorie/all"]);
  
  
  }






// cleartxtboox(){
//   this.description="";
//   this.descriptionbox="";
//   this.libelle="";
//   this.libellebox="";
// }












  suppacategorie(idtype) {
    this.service.deletecategorie(idtype).subscribe(data => {
      console.log(data);
      this.refresh();
  },error => console.log(error));
}











}
