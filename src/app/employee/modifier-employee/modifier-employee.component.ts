import { Component, OnInit } from '@angular/core';
import { ApiEmployeeService } from 'src/app/services/api-employee.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-modifier-employee',
  templateUrl: './modifier-employee.component.html'
 
})
export class ModifierEmployeeComponent implements OnInit {
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
  constructor( private service:ApiEmployeeService,  private activateroute: ActivatedRoute,private router:Router,private toastr:ToastrService) { 
    this.idemployee = this.activateroute.snapshot.paramMap.get("matricule");}

  ngOnInit(): void {

    this.getemployee();
    this.getlistespecialite(); 
  }

  getemployee(){

    this.service.getEmployeByID(this.idemployee).subscribe(data=>{
this.employees=data[0];

console.log(data[0]);
      console.log(this.employees);

      this.idemployee=this.employees.idEmployee;
      this.nom=this.employees.nomEmployee;
      this.prenom=this.employees.prenomEmployee;
      this.adress=this.employees.adressEmployee;
      this.telephone=this.employees.telEmployee;
      this.cin=this.employees.cinEmployee;
      this.cnss=this.employees.cnssEmployee;
      this.typec=this.employees.type_contrat;
      this.specialite=this.employees.libelle;

      

    this.employees =[];
    }, error => console.log(error));
    
  }



edit(){
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

  if (this.idemployee) { this.employees.idemployee = this.idemployee; }
  if (this.nom) { this.employees.nom = this.nom ;}
  if (this.prenom) { this.employees.prenom = this.prenom ;}
  if (this.adress) { this.employees.adress = this.adress ;}
  if (this.telephone) { this.employees.telephone = this.telephone ;}
  if (this.cin) { this.employees.cin = this.cin; }
  if (this.cnss) { this.employees.cnss = this.cnss ;}
  if (this.typec) { this.employees.typec = this.typec; }
  if (this.specialite) { this.employees.specialite = this.specialite ;}



  this.service.editEmploye( this.employees.idemployee,this.employees.nom, this.employees.prenom, this.employees.adress,
    this.employees.telephone,this.employees.cin, this.employees.cnss,this.employees.typec,this.employees.specialite ).subscribe(data => {
  
      console.log(data);
      if(data.RESPONSE){
this.toastr.warning(data.RESPONSE);
//toestr
      }
      else{

      this.employees[0] = data[1];
      this.toastr.success("modifier avec succes")
    }
      // this.router.navigate(["categorie/all"]);
    }, error => console.log(error));
  }



}























  getlistespecialite(){
    this.service.getAllspecialiter().subscribe(data => {
  if(data.RESPONSE){
this.toastr.warning("liste specialiter vide !! "); 
  }else
      {
        this.listespecialiter = data;
        this.typecbox="Spécialité";
  }  
      console.log(this.listespecialiter);
      },error => console.log(error));
  
  }






 




  retourlist(){

    this.router.navigate(["home/employee/all"]);
  
  
  
  
  
  }

  supprimer(idemployee){
  
    this.service.deleteEmploye(idemployee).subscribe(data=>{
      this.toastr.warning(data.RESPONSE);
    
    },error=>console.log(error));
}
}
