import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PanierService } from '../../../services/panier.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-create-panier',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './create-panier.component.html',
  styleUrl: './create-panier.component.css'
})
export class CreatePanierComponent {

  newPanier: FormGroup;
  valid: boolean = false;

  constructor(
    private fb: FormBuilder,
    private panierService: PanierService,
    private router: Router
  ) { 
    this.newPanier = this.fb.group({
      nomPa: ['', Validators.required],
      prixPa: ['', Validators.required]
    })
   }

   createPanier(): void {
    this.valid = true;

    if (this.newPanier.invalid){
      return
    }
    else{
      this.panierService.addpanier(this.newPanier.value).subscribe({
        next: () => {
          alert('Nouveau produit créé.');
          this.router.navigate(['/Panier']);
        },
        error: () => alert("Une erreur est survenue. Veuillez recommencer")
      })
    }
   }

   public get form() {
    return this.newPanier.controls;
  }


}
