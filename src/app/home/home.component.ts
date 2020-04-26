import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
  
})
export class HomeComponent implements OnInit {
  photo: string;

  constructor(private router: Router) { }

  ngOnInit(): void {

this.veriflogin();

  }

veriflogin(){

//Récupération de l'objet

var verif = sessionStorage.getItem('userID');
if (verif){
  this.router.navigate(["/home"]);
  console.log("session userid : "+verif);
  this.photo=sessionStorage.getItem('PHOTO');
  console.log(this.photo);
}
else{
  this.router.navigate(["/"]);
  console.log("session userid : "+verif);
}
console.log(verif);

}







}
