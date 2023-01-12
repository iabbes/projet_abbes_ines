import { Component } from '@angular/core';
import { ComposantAfficherAvionComponent } from './composant-afficher-avion/composant-afficher-avion.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projet_abbes_ines';

  /*login(username: string, password: string) {
    this.loginService.login(username, password).subscribe(
      (response) => {
        if (response.success) {
          this.isConnected = true;
        } else {
          this.isConnected = false;
          // Afficher une erreur pour l'utilisateur
        }
      },
      (error) => {
        this.isConnected = false;
        // Afficher une erreur pour l'utilisateur
      }
    );
  }

  // logout() {
  //   this.loginService.logout().subscribe(() => {
  //     this.isConnected = false;
  //   });
  // }*/
}
