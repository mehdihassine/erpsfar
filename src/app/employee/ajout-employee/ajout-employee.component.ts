import { Component, OnInit } from '@angular/core';
import { ApiEmployeeService } from 'src/app/services/api-employee.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ajout-employee',
  templateUrl: './ajout-employee.component.html'
 
})
export class AjoutEmployeeComponent implements OnInit {
  idemployee:any;
  nom:any;
  prenom:any;
  adress:any;
  telephone:any;
  cin:any;
  cnss:any;
  typec:any;
  specialite:any;
  typebox:any="choisir";
  typecbox:any="choisir";
  employees:any=[];
  listespecialiter:any=[];
  constructor( private service:ApiEmployeeService, private router:Router,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.cleartxtbox();
    this.getlistespecialite(); 
  }



  getlistespecialite(){
    this.specialite="";
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

  cleartxtbox(){

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



  add() {
   
    var reg = /^[0-9]+$/;


    if (!this.nom) {
      this.toastr.error('champ nom  obligatoire!!');
    }

    else if (!this.prenom) {
      this.toastr.error('champ prenom obligatoire!!');
    }
    
    else if (!this.adress) {
      this.toastr.error('champ adress obligatoire!!');
    }
    else if((!this.telephone.match(reg))||(!this.telephone)){
    
      this.toastr.error('champ telephone obligatoirement numerique!!');
    }
   

    else if ((!this.cin.match(reg))||(!this.cin)){
      this.toastr.error('champ cart identitée obligatoirement numerique!!');
     }
      else if  ((!this.cnss.match(reg))||(!this.cnss)){
        this.toastr.error('champ numero CNSS obligatoirement numerique!!');
       }
    else if (!this.typec) {
      this.toastr.error('champ type contrat obligatoire!!');
    }
    else if (!this.specialite) {
      this.toastr.error('champ specialité obligatoire!!');
    }


    else {






    this.service.addemploye(this.nom,this.prenom,this.adress,this.telephone,this.cin,this.cnss,this.typec,this.specialite).subscribe(data => {
      console.log(data);
     
      if(data.RESPONSE){
      
        this.toastr.error(data.RESPONSE);
      
      }
      else{
        this.employees[0]=(data[1]);
        console.log( this.employees[0]);

      }
      this.cleartxtbox();
    
},error=>console.log(error));



}





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
