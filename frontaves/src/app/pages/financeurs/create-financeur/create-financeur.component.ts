import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { FinanceurService } from '../../../services/financeur.service';
import { ImagesService } from '../../../services/images.service';

@Component({
  selector: 'app-create-financeur',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './create-financeur.component.html',
  styleUrl: './create-financeur.component.css'
})
export class CreateFinanceurComponent {

  newFinanceur: FormGroup;
  newImage: FormGroup;
  valid: boolean = false;
  imUpload!: File;
  pageSelect = ['Association intermédiaire', 'Créations d\'Henri', 'Savoirs-Fer', 'Plateforme Mobilité', 'En terre connectée']

  constructor(
    private fb: FormBuilder,
    private financeurService: FinanceurService,
    private imageService: ImagesService,
    private router: Router
  ) {
    this.newFinanceur = this.fb.group({
      logoF: ['', Validators.required],
      linkF: [''],
      pageF: ['', Validators.required]
    }),
    this.newImage = this.fb.group({
      imageFile: [''],
      nomIm: ['']
    })
  }

  onFileChange(event: any){
    this.imUpload = event.target.File ? event.target.File[0] : null;
    this.newFinanceur.get('logoF')?.setValue(this.imUpload.name);
    this.newImage.get('nomIm')?.setValue(this.imUpload.name);
    this.newImage.get('imageFile')?.setValue(this.imUpload);
  }

  createFinanceur(): void {
    this.valid = true;

    if (this.newFinanceur.invalid){
      return
    }
    else{
      this.imageService.addImages(this.newImage.value);
      this.financeurService.addfinanceur(this.newFinanceur.value).subscribe({
        next: () => {
          alert('Nouveau produit créé.');
          this.router.navigate(['/Financeur']);
        },
        error: () => alert("Une erreur est survenue. Veuillez recommencer")
      })
    }
   }

   public get form() {
    return this.newFinanceur.controls;
  }

}

