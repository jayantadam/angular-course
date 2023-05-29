import { Component } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  loggedInUserName:string;
   constructor(
    private router: Router,
  ){
     let result=JSON.parse(localStorage.getItem('userData'));
    this.loggedInUserName=result?.response?.name;
  }
logout(){
  localStorage.clear();
    this.router.navigate(["/"]);
}
}
