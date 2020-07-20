import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from 'src/app/services/utilisateur.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-liste-user',
  templateUrl: './liste-user.component.html'
 
})
export class ListeUserComponent implements OnInit {
 
  utilisateur:any=[];
  iduser: any;
  idPr: any;
 
 
  constructor(private service : UtilisateurService,private router:Router,private toaster:ToastrService) { }

  ngOnInit(): void {
   
    this.refresh();
  }

  refresh(){
    this.service.getAlluser().subscribe(data=>{
      console.log(data); 
    this.utilisateur=data ; 
    },error=> console.log (error));
  }

  
  ajoute(){
    this.router.navigate(["home/utilisateur/creation"]);

  }

  loginuser(loginuser){
   
    this.idPr=loginuser;
   
     }
  delete(idPr){
    this.service.supprimeruser(idPr).subscribe(data=>{
      console.log(data);
     
        this.toaster.success(data.RESPONSE); 
        this.refresh();
     
    
    },error=>console.log(error));
  } 


  profil(iduser){
    this.router.navigate(["/home/utilisateur/modifier/"+iduser]);
    
  }
}

