import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from 'src/app/services/utilisateur.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-modifier-profil',
  templateUrl: './modifier-profil.component.html'

})
export class ModifierProfilComponent implements OnInit {
  urlAP ="http://127.0.0.1/apis_pfe/utilisateur/";
  selectedFile =null;
  iduser: any;
  table: any=[];
nom:any
prenom:any;
login:any;
mdp:any
mail:any;
cmdp:any;
nomuser:any;
prenomuser:any;
roleuser:any;
loginuser:any;
mpduser:any;
email:any;
photo:any;
  photo2: any;
  constructor(private http:HttpClient, private service : UtilisateurService,private router:Router,private toaster:ToastrService,private activateroute:ActivatedRoute) {
     this.iduser = this.activateroute.snapshot.paramMap.get("iduser");

   }

   imagepath="http://127.0.0.1/apis_pfe/utilisateur/image/";

  ngOnInit(): void {
this.getinformation();

  }

  getinformation(){
    this.service.getprofil(this.iduser).subscribe(data=>{
      this.table=data;
      this.nomuser=data.nomuser;
      this.prenomuser=data.prenomuser;
      this.loginuser=data.loginuser;
      this.mpduser=data.mpduser;
      this.email=data.email;
      this.photo=data.photo;
      console.log(data);
      this.photo= "http://127.0.0.1/apis_pfe/utilisateur/image/"+data.photo;  
     // this.photo=this.imagepath+this.photo;

    },error=>console.log(error));

  }

  onFileSelected(event){
      this.selectedFile=<File>event.target.files[0];
      console.log(this.selectedFile); 
     // get path of file 
     this.photo=this.selectedFile.name;
    
     console.log(this.photo);  


  }


  onUpload(){
    const fd =new FormData();
    fd.append('myFile',this.selectedFile,this.selectedFile.name);
    this.http.post(this.urlAP+"uploadimage.php",fd,{
      reportProgress:true,
      observe:'events'
    })
    .subscribe(event=>{
      
  
     
      console.log(event);
     // this.photo=this.selectedFile.name;
    });

  }  

  enregistre(){

  
    










    if(!this.cmdp){
      this.toaster.warning("confirmer votre mot passe !!");

    }
    else{
  
      if (this.nom) { this.table.nomuser = this.nom; }
  if (this.prenom) { this.table.prenomuser = this.prenom ;}
  if (this.login) { this.table.loginuser = this.login ;}
  if (this.mail) { this.table.email = this.mail ;}
 
  if (this.mdp) { this.table.mpduser = this.mdp; }
  if (this.photo) { this.table.photo = this.photo;}

      this.service.updateuser(this.iduser, this.table.nomuser,this.table.prenomuser,
        this.table.loginuser,this.table.email,
        this.table.mpduser,this.table.photo).subscribe(data=>{
        this.table[0]=data;
        console.log(data);
        console.log(this.table.photo);
       // this.getinformation();
       sessionStorage.setItem("PHOTO" ,data['photo']);
      },error=>console.log(error));
     
      this.photo=sessionStorage.getItem("PHOTO");
      this.getinformation();
      this.router.navigate(["/home/utilisateur/modifier/"+this.iduser]);

    }
    
  }
retour(){
 
    this.router.navigate(["/"]);

}





































}
