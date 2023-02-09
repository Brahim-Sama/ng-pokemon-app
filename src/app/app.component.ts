import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "./auth.service";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
})
export class AppComponent {
  auth: AuthService;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.auth = this.authService;
  }
  // Déconnecte l'utilisateur
  logout() {
    this.auth.logout();
    // this.auth.redirectUrl : "/";
    this.router.navigate(["/login"]);
  }
}
