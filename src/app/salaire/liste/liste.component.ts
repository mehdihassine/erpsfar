import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { SalairesService } from 'src/app/services/salaires.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  etat:any;
  typebox: any ; 
  specialite:any[]; 
  libelle : any ; 
  specialiter: any ; 
  selectedspecialiter: string;
  listespecialiter: any=[];
  salaires:any=[];
  typebox2: any="etat";
  idemploye: any;
  idPr: any;
    
    constructor(private service:SalairesService, private toastr: ToastrService, private router:Router) { }
  
    ngOnInit(): void {
      // this.getlistespecialiter();
      this.refresh();
      
      
    }
  //   getlistespecialiter(){
     
  //   this.service.getAllspecicaliter().subscribe(data => {
  //   if(data.RESPONSE){
  //     this.toastr.warning(data.RESPONSE);
  //  }
  //  else
  //       { this.listespecialiter = data; }
  //       console.log(this.listespecialiter);
  //       },error => console.log(error));
    
  //   }
  
    refresh(){
      this.service.getAllfiche().subscribe(data=>{
        console.log(data); 
        
        if(data.RESPONSE){
          this.toastr.warning("liste salaire vide !!!");
        }else
        {
          this.salaires=data ;
        
            }
            this. cleartxtbox();
      },error=> console.log (error));
    
    }




    idemployee(idemploye){
   
      this.idPr=idemploye;
     
       }
     
     


  delete(idPr){
     this.service.deleteEmploye(idPr).subscribe(data=>{
        console.log(data);
          this.toastr.success(data.RESPONSE);

       this.refresh();

        
      },error=>console.log(error));
     } 
   

  
  affiche(){
    this.refresh();
  }

   cleartxtbox(){

    this.typebox2="etat";
    this.etat="";
   this.idemploye="";
 }
  
  
  nouveaufiche(){
  
    this.router.navigate(["home/salaire/creation"]);
  
  
  }
  
  Recherche(){
    if((!this.etat)&&(!this.idemploye)){
      this.toastr.warning('Champ recherche vide !!');
       this.refresh();
    }
    else if ((!this.etat)&&(this.idemploye)){
      this.service.rechidemploye(this.idemploye).subscribe(data=>{
        console.log(data);
        if (data.RESPONSE){
          this.toastr.warning(data.RESPONSE);
        }else{
           this.salaires=data; 
            }
          },error=>console.log(error));
    }
    else if ((this.etat)&&(!this.idemploye)){ 
this.service.rechetat(this.etat).subscribe(data=>{
  console.log(data); 
  if (data.RESPONSE){
    this.toastr.warning(data.RESPONSE); 
  }else { this.salaires=data; }
},error=>console.error(error)); 


    }
    else if ((this.etat)&&(this.idemploye)){
      this.service.rechsalaire(this.etat,this.idemploye).subscribe(data=>{
        console.log(data); 
        if (data.RESPONSE){
          this.toastr.warning(data.RESPONSE); 
        }else { this.salaires=data; }
      },error=>console.error(error)); 
    }
  }


 




// else if((!this.specialiter)&&(this.etat)&&(!this.idemploye)){
//   //service  type cc
//   this.services.rechtypec(this.etat).subscribe(data=>{
//     console.log(data);
//     if (data.RESPONSE){
//       this.toastr.warning(data.RESPONSE);
//       this.employees=[];
//     }else{
//       this.employees=data; 
//     }
    
//   },error=>console.log(error));
  
// }





// else if((this.specialiter)&&(!this.etat)&&(!this.idemploye)){
//   //service speccialiter
//   this.services.rechspecialiter(this.specialiter).subscribe(data=>{
//     console.log(data);
//     if (data.RESPONSE){
//       this.toastr.warning(data.RESPONSE);
//       this.employees=[];
//     }else{
//       this.employees=data; 
//     }
    
//   },error=>console.log(error));
// }



// else if((this.specialiter)&&(this.etat)&&(!this.idemploye)){
//   //service speccialiter et type c 
//   this.services.rechspecialitertypec(this.specialiter,this.etat).subscribe(data=>{
//     console.log(data);
//     if (data.RESPONSE){
//       this.toastr.warning(data.RESPONSE);
//       this.employees=[];
//     }else{
//       this.employees=data; 
//     }
    
//   },error=>console.log(error));
// }

// this.cleartxtbox();

// }
}

