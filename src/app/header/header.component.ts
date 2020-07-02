import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiAuthService } from '../services/api-auth.service';
import { ToastrService } from 'ngx-toastr';
import { ApiStockService } from '../services/api-stock.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  user: any;
  resulttt : any = [];
  iduser: any;
  photo: string;
  notifs: any = [];
  constructor(private service:ApiAuthService,private router:Router,private toaster:ToastrService, private servNoti : ApiStockService) { 

  }

  ngOnInit(): void {
   
    this.user=sessionStorage.getItem("userNP");
    this.iduser=sessionStorage.getItem("userID");
    this.verifphoto(this.iduser);
    //this.photo=sessionStorage.getItem("PHOTO");
    console.log(this.photo);


    this.servNoti.getstock().subscribe(data=>{
        this.resulttt = data ; 
      for (let i=0; i<= this.resulttt.length; i++) {
        console.log("---------------");
        let x = this.resulttt[i].quantitetot ; let y =  this.resulttt[i].seuilmin ; let z ; 
       z=x-y ;   
       if(z<0){     
        console.log("noooooooooooo"+this.resulttt[i].codearticle);
         this.notifs.push({"codearticle":this.resulttt[i].codearticle,"libellearticle":this.resulttt[i].libellearticle,"quantitetot":this.resulttt[i].quantitetot,"emplacement": this.resulttt[i].emplacement, "typestockage":this.resulttt[i].typestockage });
         
        console.log("sizeeeeeee "+this.notifs[0]); 
        }else{
          console.log("okkkkkkkkkkkkkkk");
        }
    }
    }, error=>{
      console.log("Erreur");
    })


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
