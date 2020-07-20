import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from 'src/app/services/utilisateur.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { error } from '@angular/compiler/src/util';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Utilisateur } from 'src/app/models/utilisateur';

@Component({
  selector: 'app-creation-user',
  templateUrl: './creation-user.component.html'
  
})
export class CreationUserComponent implements OnInit {
  addUSR : FormGroup;
   nom:String ; 
   rolebox:any="Choisir Role";
    utilisateur:any=[];
  constructor(private service : UtilisateurService,private router:Router,private toaster:ToastrService, private fb: FormBuilder) { 
      let fromControls = {
        nomuser :  new FormControl('', [Validators.required, Validators.minLength(3)]),
        prenomuser :  new FormControl('', Validators.required),
        role :  new FormControl('', Validators.required),
        loginuser :  new FormControl('', Validators.required),
        mdpuser :  new FormControl('', Validators.required),
        email :  new FormControl('', Validators.required)
      } 

      this.addUSR = this.fb.group(fromControls);
    
  }

  get nomuser(){return this.addUSR.get('nomuser')}
  get prenomuser(){return this.addUSR.get('prenomuser')}
  get role(){return this.addUSR.get('role')}
  get loginuser(){return this.addUSR.get('loginuser')}
  get mdpuser(){return this.addUSR.get('mdpuser')}
  get email(){return this.addUSR.get('email')} 


  ngOnInit(): void {
     this.rolebox="Choisir Rôle";
  }
 

  saveUser(){
  console.log("je sui s laaa");
  let data = this.addUSR.value; 
  this.nom = data.nomuser; 
  let user = new Utilisateur(null, data.nomuser, data.prenomuser, data.role, data.email, data.mdpuser, data.loginuser);

    this.service.ajoutuser(user).subscribe(data=>{
      this.utilisateur=data; 
      if (data['RESPONSE'] == "0") {
        this.utilisateur = [];
        this.toaster.error('login  [' + this.nom+ '] déjà existante');
      }
      else { this.addUSR.reset();
        this.toaster.success('USER ['+this.nom+'] ajoutee avec success!!');

      }
     
    },error=>console.log(error)); 
     


}

viderChamps(){/*
  this.addUSR.patchValue({
    nomuser:"" ,
    prenomuser:"" ,
    role:"" ,
    loginuser:"" ,
    email:"" 
  })*/
}

retourliste(){

  this.router.navigate(["home/utilisateur/list"]);


}




}
