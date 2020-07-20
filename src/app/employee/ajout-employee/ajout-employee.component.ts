import { Component, OnInit } from '@angular/core';
import { ApiEmployeeService } from 'src/app/services/api-employee.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Employeer } from 'src/app/models/employee';

@Component({
  selector: 'app-ajout-employee',
  templateUrl: './ajout-employee.component.html'
 
})
export class AjoutEmployeeComponent implements OnInit {
  addEmploye:FormGroup;
  idemployee:any;
 
  typebox:any="choisir";
  typecbox:any="choisir";
  employees:any=[];
  listespecialiter:any=[];
  specialites: any;
  constructor( private service:ApiEmployeeService, private router:Router,private toastr:ToastrService,private fb: FormBuilder) {
    let formControls={
      nom :  new FormControl('', [Validators.required, Validators.minLength(3),Validators.pattern('[a-zA-Z ]*')]),
      prenom :   new FormControl('', [Validators.required,Validators.pattern('[a-zA-Z ]*')]),
      adress :   new FormControl('', Validators.required),
      telephone :  new FormControl('', [Validators.required, Validators.pattern("[0-9 ]{8}")]),
      cin :  new FormControl('', [Validators.required, Validators.minLength(8),Validators.maxLength(8)]),
      cnss :  new FormControl('', Validators.required),
      typec :   new FormControl('', Validators.required),
      specialite :   new FormControl('', Validators.required),
    
    }
    this.addEmploye=this.fb.group(formControls);
   }
   get nom(){return this.addEmploye.get('nom')}
   get prenom(){return this.addEmploye.get('prenom')}
   get adress(){return this.addEmploye.get('adress')}
   get telephone(){return this.addEmploye.get('telephone')}
   get cin(){return this.addEmploye.get('cin')}
   get cnss(){return this.addEmploye.get('cnss')}
   get typec(){return this.addEmploye.get('typec')}
   get specialite(){return this.addEmploye.get('specialite')}


  ngOnInit(): void {
   
    this.getlistespecialite(); 
  }



  getlistespecialite(){
  this.specialites="";
    this.service.getAllspecialiter().subscribe(data => {
  if(data.RESPONSE){
this.toastr.warning("liste specialiter vide !! "); 
  }else
      {
        this.listespecialiter = data;
        this.typecbox="choisir";
  }  
      console.log(this.listespecialiter);
      },error => console.log(error));
  
  }

 /* cleartxtbox(){

    this.nom="";
    this.prenom="";
    this.adress="";
    this.telephone="";
    this.cin="";
    this.cnss="";
    this.typec="";
    this.specialite="";
    this.typebox="choisir";
    this.typecbox="choisir";

  }
*/


  add() {
   
   let data=this.addEmploye.value;
   let user=new Employeer(data.nom,data.prenom,data.adress,data.telephone,data.cin,data.cnss,
    data.typec,data.specialite);
console.log(user);
console.log(data.specialite); 
    this.service.addemploye(user).subscribe(data2 => {
      console.log(data2);
     
      if(data2['RESPONSE']){
      
        this.toastr.error(data2['RESPONSE']);
      
      }
      else{
        this.employees=data2;
        console.log( data2+" ---------------------- : "+data2[0]);
        console.log( "ressssssssssssssss : "+this.employees[0]);
        this.addEmploye.reset();
      }
     
    
},error=>console.log(error));









}
retourlist(){

  this.router.navigate(["home/employee/all"]);





}
refresh(){

  this.employees=[];
  
  }


supprimer(idemployee){
  
    this.service.deleteEmploye(idemployee).subscribe(data=>{
      this.toastr.warning(data.RESPONSE);
      this.refresh();
    },error=>console.log(error));
}


}
