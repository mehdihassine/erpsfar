import { Component, OnInit } from '@angular/core';
import { ApiAuthService } from 'src/app/services/api-auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./fonts/Linearicons-Free-v1.0.0/icon-font.min.css','./vendor/animate/animate.css','./vendor/css-hamburgers/hamburgers.min.css','./vendor/animsition/css/animsition.min.css','./vendor/select2/select2.min.css',
 './vendor/daterangepicker/daterangepicker.css','./css/util.css','./css/main.css','./vendor/bootstrap/css/bootstrap.min.css','./fonts/font-awesome-4.7.0/css/font-awesome.min.css'


]
})
export class LoginComponent implements OnInit {
  mail:any; 
  login=""; 
pass="";
  role: string;
  log=false ; //ariable 7atit fehah type boolean //log varible 7atit fih kelmet false 

  visibilite = 'style="visibility: hidden;"';
  photo: any;

  constructor(private service:ApiAuthService,private router:Router,private toaster:ToastrService) { }

  ngOnInit(): void {
    this.veriflogin();
  }

  verifUser(){
    console.log("user name:" +this.login);
    console.log("password:" +this.pass);
    this.service.verifUser(this.login,this.pass).subscribe(data =>{
      console.log(data['nomuser']);
      if(data['nomuser']!=null){
      

      sessionStorage.setItem("userID",data['iduser']);
      sessionStorage.setItem("userNP",data['nomuser']+" "+data['prenomuser']);
      sessionStorage.setItem("role" ,data['roleuser']);
      sessionStorage.setItem("PHOTO" ,data['photo']);
      this.role = sessionStorage.getItem('role');
     // console.log("PHOTO: " +this.photo);
      console.log("role:" +this.role);
                  this.router.navigate(["/home"]);
    }

    else{
      this.toaster.error("LOGIN ou PASSWORD incorrect!!!");
    }

    },error=>{
      console.log("Erreur :"+error);
  })
  }

  veriflogin(){

    //Récupération de l'objet
    
    var verif = sessionStorage.getItem('userID');
    if (verif){
     this.router.navigate(["/home"]);
      console.log("session userid : "+verif);
    }
    else{
      this.router.navigate(["/"]);
      console.log("session userid : "+verif);
    }
    console.log(verif);
    
    }


    forgotpass(){
      this.log=true;

    }


    retourlogin(){

      this.log=false;
    }




    resetpass(){
     
        this.service.verifmail(this.mail).subscribe(data => {
        
        
          var reponsemail = data[0].RESPONSE;
          var reponsemail2=data[0].RESPONSE2;
          console.log(data);
if(reponsemail){
  this.toaster.success(reponsemail);
}
else if (reponsemail2){
  this.toaster.warning(reponsemail2);
  
}
else{
  this.toaster.error(data[0].RES);
}

        

          
        
      },error => console.log(error));
      
      

}


























  }




