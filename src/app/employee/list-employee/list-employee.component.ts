import { Component, OnInit } from '@angular/core';
import { ApiEmployeeService } from 'src/app/services/api-employee.service';
import { SpecialiteeService } from 'src/app/services/specialitee.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html'
 
})
export class ListEmployeeComponent implements OnInit {
  employee: any[]
 // constructor(private service:ApiEmployeeService) { }

typec:any;
  typebox: any ; 
  specialite:any[]; 
  libelle : any ; 
  specialiter: any ; 
  selectedspecialiter: string;
  listespecialiter: any=[];
  employees:any=[];
  typebox2: any="contrat";
  idemploye: any;
    
    constructor(private service:SpecialiteeService,private services:ApiEmployeeService, private toastr: ToastrService, private router:Router) { }
  
    ngOnInit(): void {
      this.getlistespecialiter();
      this.refresh();
      
      
    }
    getlistespecialiter(){
     
    this.service.getAllspecicaliter().subscribe(data => {
    if(data.RESPONSE){
      this.toastr.warning(data.RESPONSE);
   }
   else
        { this.listespecialiter = data; }
        console.log(this.listespecialiter);
        },error => console.log(error));
    
    }
  
    refresh(){
      this.services.getAllEmploye().subscribe(data=>{
        console.log(data); 
        
        if(data.RESPONSE){
          this.toastr.warning("liste employee vide !!!");
        }else
        {
          this.employees=data ;
        
            }
            this. cleartxtbox();
      },error=> console.log (error));
    
    }







   delete(matricule){
      this.services.deleteEmploye(matricule).subscribe(data=>{
        console.log(data);
         this.toastr.success(data.RESPONSE);

       this.refresh();

        
      },error=>console.log(error));
    } 
   

  
  affiche(){
    this.refresh();
  }

  cleartxtbox(){
    this.typebox="Specialiter";
    this.specialiter="";
    this.typebox2="Type contrat";
    this.typec="";
    this.idemploye="";
  }
  
  
  nouveauemployee(){
  
    this.router.navigate(["home/employee/ajout"]);
  
  
  }
  



 

  Recherche(){
  

if((!this.specialiter)&&(!this.typec)&&(!this.idemploye)){
  this.toastr.warning('Champ recherche vide !!');
  this.refresh();

}

else if((!this.specialiter)&&(!this.typec)&&(this.idemploye)){
//servvicce rech avec id employee

this.services.rechidemploye(this.idemploye).subscribe(data=>{
  console.log(data);
  if (data.RESPONSE){
    this.toastr.warning(data.RESPONSE);
  }else{
    this.employees=data; 
  }
  
},error=>console.log(error));

}


else if((!this.specialiter)&&(this.typec)&&(!this.idemploye)){
  //service  type cc
  this.services.rechtypec(this.typec).subscribe(data=>{
    console.log(data);
    if (data.RESPONSE){
      this.toastr.warning(data.RESPONSE);
      this.employees=[];
    }else{
      this.employees=data; 
    }
    
  },error=>console.log(error));
  
}





else if((this.specialiter)&&(!this.typec)&&(!this.idemploye)){
  //service speccialiter
  this.services.rechspecialiter(this.specialiter).subscribe(data=>{
    console.log(data);
    if (data.RESPONSE){
      this.toastr.warning(data.RESPONSE);
      this.employees=[];
    }else{
      this.employees=data; 
    }
    
  },error=>console.log(error));
}



else if((this.specialiter)&&(this.typec)&&(!this.idemploye)){
  //service speccialiter et type c 
  this.services.rechspecialitertypec(this.specialiter,this.typec).subscribe(data=>{
    console.log(data);
    if (data.RESPONSE){
      this.toastr.warning(data.RESPONSE);
      this.employees=[];
    }else{
      this.employees=data; 
    }
    
  },error=>console.log(error));
}

this.cleartxtbox();

}

print(imprimer){
  var printContents = document.getElementById(imprimer).innerHTML;    
 var originalContents = document.body.innerHTML;      
 document.body.innerHTML = printContents;     
 window.print();     
 document.body.innerHTML = originalContents;
 }
}