import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent {
  loggedInUserName: string;
  tab: any = "tab1";

  constructor(public router: Router) {
    let result = JSON.parse(localStorage.getItem("userData"));
    this.loggedInUserName = result?.response?.name;
    console.log("this.router.url",this.router.url)
  }
  logout() {
    localStorage.clear();
    this.router.navigate(["/"]);
  }

  onClick(check) {
    console.log(check);
    if (check == 1) {
      this.tab = "tab1";
      this.router.navigate(["/products/list"]);
    } else if (check == 2) {
      this.tab = "tab2";
      this.router.navigate(["/products/list"]);
    } else {
      this.tab = "tab3";
      this.router.navigate(["/employee"]);
    }
  }
}
