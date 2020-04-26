import { Component, OnInit } from '@angular/core';
import { ApiAuthService } from '../services/api-auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
user:any; 
  role: string;
  photo: string;
  iduser: any;
  constructor(private service:ApiAuthService,private router:Router,private toaster:ToastrService) { }

  ngOnInit(): void {
    this.verifroleuser();
    this.verifphoto(this.iduser);
  }

  verifphoto(iduser){
   
    this.service.verifphoto(iduser).subscribe(data =>{
console.log(iduser);
       
    sessionStorage.setItem("PHOTO" ,data['photo']);
    this.photo=sessionStorage.getItem("PHOTO");
console.log(this.photo);

    },error=>{
      console.log(error);
  })
  }

  verifroleuser(){

this.role=sessionStorage.getItem("role");
this.user=sessionStorage.getItem("userNP");
this.photo=sessionStorage.getItem("PHOTO");
this.iduser=sessionStorage.getItem("userID");


  }

}
