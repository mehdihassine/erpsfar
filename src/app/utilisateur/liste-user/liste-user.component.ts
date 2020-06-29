import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from 'src/app/services/utilisateur.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-liste-user',
  templateUrl: './liste-user.component.html'
 
})
export class ListeUserComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  utilisateur:any=[];
  iduser: any;
 

  constructor(private service : UtilisateurService,private router:Router,private toaster:ToastrService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      paging: false
  };


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
  delete(login){
    this.service.supprimeruser(login).subscribe(data=>{
      console.log(data);
      this.refresh();
    },error=>console.log(error));
  } 


  profil(iduser){
    this.router.navigate(["/home/utilisateur/modifier/"+iduser]);
    
  }
}

