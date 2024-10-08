import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormulaireContactService } from '../../services/formulaire-contact.service';

import formulaireContact from '../../models/formulaireContact';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-formulaire-contact',
  standalone: true,
  imports: [ReactiveFormsModule, DatePipe],
  templateUrl: './formulaire-contact.component.html',
  styleUrl: './formulaire-contact.component.css',
  providers: [DatePipe]
})

export class FormulaireContactComponent {

  FormulaireContact: FormGroup;
  valid: boolean = false;
  public date = new Date();
  public dateFormulaire = this.datePipe.transform(
    this.date,
    "yyyy-MM-dd'T'HH:mm:ssZZZZZ"
  );

  constructor(
    private datePipe: DatePipe,
    private formbuild: FormBuilder,
    private formulaireContactService: FormulaireContactService,
    private router: Router
  ){
    this.FormulaireContact = this.formbuild.group({
      nom_fc: ['', Validators.required],
      prenom_fc: ['', Validators.required],
      tel_fc: ['', Validators.required],
      mail_fc: ['', Validators.required],
      content_fc: ['', Validators.required],
      date_fc: ['']
    })
  }

  envoiFormulaire(): void {
    this.valid = true;

    if (this.FormulaireContact.invalid){
      return;
    }
    else{
    this.FormulaireContact.patchValue({date_fc: this.dateFormulaire});

    this.formulaireContactService.addformulaireContact(this.FormulaireContact.value).subscribe({
      next: () => {
        alert('Votre message a bien été pris en compte.');
        this.router.navigate(['/Accueil']);
      },
      error: () => alert("Une erreur est survenue. Veuillez recommencer")
    })
  }

  }

  public get form() {
    return this.FormulaireContact.controls;
  }

}
