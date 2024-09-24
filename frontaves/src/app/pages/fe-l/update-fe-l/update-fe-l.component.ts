import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FeLService } from '../../../services/fe-l.service';
import FeL from '../../../models/FeL.model';

@Component({
  selector: 'app-update-fe-l',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './update-fe-l.component.html',
  styleUrl: './update-fe-l.component.css'
})
export class UpdateFeLComponent implements OnInit {

  valid: boolean = false;
  detailFeL: FormGroup;
  FeLId!: number;

  constructor(
    private felService: FeLService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) { 
    this.detailFeL = this.fb.group({
      nomFeL: ['', Validators.required],
      varieteFeL: [null],
      visibleFeL: [true, Validators.required]
    })
   }

   afficherFeL(visible: boolean) {
    visible = !visible;
  }

   updateFeL(): void {
    this.valid = true;
    if (this.detailFeL.invalid){
      return;
    }
    if (this.FeLId) {
      this.felService.updateFeL({...this.detailFeL.value, id: this.FeLId}).subscribe({
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

   deleteFeL () {
    this.felService.deleteFeL(this.FeLId).subscribe({
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
     this.FeLId = Number(this.route.snapshot.paramMap.get('id'));
     if(this.FeLId){
      this.felService.getFeL(this.FeLId).subscribe(
        (data: FeL) => this.detailFeL.patchValue({...data})
      );
     }
   }

}
