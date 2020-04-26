import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiAuthService } from '../services/api-auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  user: any;
  iduser: any;
  photo: string;

  constructor(private service:ApiAuthService,private router:Router,private toaster:ToastrService) { 

  }

  ngOnInit(): void {
   
    this.user=sessionStorage.getItem("userNP");
    this.iduser=sessionStorage.getItem("userID");
    this.verifphoto(this.iduser);
    //this.photo=sessionStorage.getItem("PHOTO");
    console.log(this.photo);

  }

  verifphoto(iduser){
   
    this.service.verifphoto(iduser).subscribe(data =>{
console.log(iduser);
       
    sessionStorage.setItem("PHOTO" ,data['photo']);
    this.photo=sessionStorage.getItem("PHOTO");
console.log(this.photo);
this.router.navigate(["/home"]);
    },error=>{
      console.log(error);
  })
  }


  logout(){
    sessionStorage.removeItem("userID");
    sessionStorage.removeItem("userNP");
    sessionStorage.clear();
    this.router.navigate(["/"]);
  }
  profil(){
    this.router.navigate(["/home/utilisateur/modifier/"+this.iduser]);
    
  }
  }
