import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FeLService } from '../../../services/fe-l.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-fe-l',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-fe-l.component.html',
  styleUrl: './create-fe-l.component.css'
})
export class CreateFeLComponent {

  newfel: FormGroup;
  valid: boolean = false;

  constructor(
    private fb: FormBuilder,
    private FeLService: FeLService,
    private router: Router
  ) { 
    this.newfel = this.fb.group({
      nomFeL: ['', Validators.required],
      varieteFeL: [null],
      visibleFeL: [true]
    })
   }

   createFeL(): void {
    this.valid = true;

    if (this.newfel.invalid){
      return
    }
    else{
      this.FeLService.addFeL(this.newfel.value).subscribe({
        next: () => {
          alert('Nouveau produit créé.');
          this.router.navigate(['/FeL']);
        },
        error: () => alert("Une erreur est survenue. Veuillez recommencer")
      })
    }
   }

   public get form() {
    return this.newfel.controls;
  }

}
