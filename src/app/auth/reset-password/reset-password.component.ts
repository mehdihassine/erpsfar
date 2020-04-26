import { Component, OnInit } from '@angular/core';
import { ApiAuthService } from 'src/app/services/api-auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html'
  
})
export class ResetPasswordComponent implements OnInit {
mail="";
  constructor(private service:ApiAuthService,private router:Router,private toaster:ToastrService) { }

  ngOnInit(): void {
  }


  
retourlogin(){
  this.router.navigate(["/"]);
}
}
