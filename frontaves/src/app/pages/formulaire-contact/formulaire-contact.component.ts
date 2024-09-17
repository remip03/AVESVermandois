import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormulaireContactService } from '../../services/formulaire-contact.service';

import formulaireContact from '../../models/formulaireContact';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulaire-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulaire-contact.component.html',
  styleUrl: './formulaire-contact.component.css'
})
export class FormulaireContactComponent {

  FormulaireContact: FormGroup;
  valid: boolean = false;

  constructor(
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
      date_fc: ['', Validators.required]
    })
  }

  envoiFormulaire(): void {
    this.valid = true;
    const dateFormulaire = new Date;
    if (this.FormulaireContact.invalid){
      return;
    }

    const FCvalid: formulaireContact = this.FormulaireContact.value;
    FCvalid.date_fc = dateFormulaire;
    console.log(dateFormulaire);
    console.log(FCvalid);
    
    

    this.formulaireContactService.addformulaireContact(FCvalid).subscribe({
      next: () => {
        alert('Votre message a bien été pris en compte.');
        this.router.navigate(['/Accueil']);
      },
      error: () => alert("Une erreur est survenue. Veuillez recommencer")
    })

  }

  public get form() {
    return this.FormulaireContact.controls;
  }

}
