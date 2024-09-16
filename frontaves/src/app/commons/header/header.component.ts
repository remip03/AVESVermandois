import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  // dropDownACI = false;
  // dropDownServices = false;

  //   // fonction pour ouvrir/fermer le menu déroulant des ateliers chantiers d'insertion
  // toggleACIDropDown() {
  //   this.dropDownACI = !this.dropDownACI;
  // }

  //   // fonction pour ouvrir/fermer le menu déroulant des services
  // toggleServicesDropDown() {
  //   this.dropDownServices = !this.dropDownServices;
  // }

  //   //fonction pour ouvrir le menu burger
  // openBurger() {
  //   const modal = document.getElementById('navbarModalBurger');
  //   if(modal) {
  //     modal.classList.remove('hiddenMenu');
  //   }
  // }

  //   //fonction pour fermer le menu burger
  // closeBurger() {
  //   const modal = document.getElementById('navbarModalBurger');
  //   if(modal) {
  //     modal.classList.add('hiddenMenu');
  //   }
  // }

}
