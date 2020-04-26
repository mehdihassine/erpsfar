import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from 'src/app/services/utilisateur.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-creation-user',
  templateUrl: './creation-user.component.html'
  
})
export class CreationUserComponent implements OnInit {
  nomuser:any; 
  prenomuser:any;
  email:any;
   role : any ;
   rolebox:any='choisir'; 
    loginuser:any;
  
    mdpuser:any;
   
    utilisateur:any=[];
  constructor(private service : UtilisateurService,private router:Router,private toaster:ToastrService) { }

  ngOnInit(): void {
  this.cleartxtbox();
  }

cleartxtbox(){
  this.nomuser="";
  this.prenomuser="";
  this.role="" ;
  this.rolebox="choisir";
  this.loginuser="" ;
  this.mdpuser="" ;
  this.email="" ;
}

creer(){
  var regemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!this.nomuser) {
    this.toaster.error('champ nom utilisateur obligatoire!!');
  }

  else if (!this.prenomuser) {
    this.toaster.error('champ Prenom utilisateur obligatoire!!');
  }
  else if (!this.email.match(regemail)) {
    this.toaster.error('champ email invalide!!');
  }
 
  else if (!this.loginuser) {
    this.toaster.error('champ login utilisateur obligatoire!!');
  }

  else if (!this.mdpuser) {
    this.toaster.error('saisir mot pass SLVP!!');
  }
  else if (!this.role) {
    this.toaster.error('choisir le role !!');
  }
  else {
    this.service.ajoutuser(this.nomuser,this.prenomuser,this.email,this.loginuser,this.mdpuser,this.role).subscribe(data=>{
      this.utilisateur=data; 
      if (data.RESPONSE == "0") {
        this.utilisateur = [];
        this.toaster.error('login  [' + this.loginuser + '] déjà existante');
      }
      else {
        this.toaster.success('USER ['+this.nomuser+'] ajoutee avec success!!');

      }
     
     
      this.cleartxtbox();
    },error=>console.log(error));;
    
  }



}

retourliste(){

  this.router.navigate(["home/utilisateur/list"]);


}




}
