import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
})
export class LoginComponent {
  message: string = "Vous êtes déconnecté. (pikachu/pikachu)";
  name: string;
  password: string;
  auth: AuthService;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.auth = this.authService;
  }

  // Informe l'utilisateur sur son authentfication.
  setMessage() {
    this.message = this.auth.isLoggedIn
      ? "Vous êtes connecté."
      : "Identifiant ou mot de passe incorrect.";
  }

  // Connecte l'utilisateur auprès du Guard
  login() {
    this.message = "Tentative de connexion en cours ...";
    this.auth.login(this.name, this.password).subscribe(() => {
      this.setMessage();
      if (this.auth.isLoggedIn) {
        // Récupère l'URL de redirection depuis le service d'authentification
        // Si aucune redirection n'a été définis, redirige l'utilisateur vers la liste des pokemons.
        let redirect = this.auth.redirectUrl
          ? this.auth.redirectUrl
          : "/pokemons";
        // Redirige l'utilisateur
        this.router.navigate([redirect]);
      } else {
        this.password = "";
      }
    });
  }

  // Déconnecte l'utilisateur
  logout() {
    this.auth.logout();
    this.setMessage();
  }
}
