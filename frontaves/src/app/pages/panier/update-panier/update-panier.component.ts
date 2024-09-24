import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PanierService } from '../../../services/panier.service';
import panier from '../../../models/panier.model';

@Component({
  selector: 'app-update-panier',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './update-panier.component.html',
  styleUrl: './update-panier.component.css'
})
export class UpdatePanierComponent implements OnInit {

  valid: boolean = false;
  detailPanier: FormGroup;
  panierId!: number;

  constructor(
    private panierService: PanierService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) { 
    this.detailPanier = this.fb.group({
      nomPa: ['', Validators.required],
      prixPa: ['', Validators.required]
    })
   }

   updatePanier(): void {
    this.valid = true;
    if (this.detailPanier.invalid){
      return;
    }
    if (this.panierId) {
      this.panierService.updatepanier({...this.detailPanier.value, id: this.panierId}).subscribe({
        next: () => {
          alert('Ce produit a bien été modifié.');
          this.router.navigate(['/listeproduit']);
        },
        error: () => {
          alert('Echec de la modification de ce produit')
        }
      })
    }
   }

   deletePanier () {
    this.panierService.deletepanier(this.panierId).subscribe({
      next: () => {
        alert('Ce produit a été supprimé.');
        this.router.navigate(['/listeproduit']);
      },
      error: () => {
        alert("Echec : ce produit n'a pas été supprimé");
      }
    })
   }

   ngOnInit(): void {
     this.panierId = Number(this.route.snapshot.paramMap.get('id'));
     if(this.panierId){
      this.panierService.getpanier(this.panierId).subscribe(
        (data: panier) => this.detailPanier.patchValue({...data})
      );
     }
   }

}
