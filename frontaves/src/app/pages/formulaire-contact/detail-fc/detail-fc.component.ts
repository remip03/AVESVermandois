import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { FormulaireContactService } from '../../../services/formulaire-contact.service';
import formulaireContact from '../../../models/formulaireContact';

@Component({
  selector: 'app-detail-fc',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, CommonModule],
  templateUrl: './detail-fc.component.html',
  styleUrl: './detail-fc.component.css'
})
export class DetailFcComponent implements OnInit {

  detailFC: FormGroup;
  fcId!: number;

  constructor(
    private fb: FormBuilder,
    private fcService: FormulaireContactService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.detailFC = this.fb.group({
      nom_fc: [''],
      prenom_fc: [''],
      tel_fc: [''],
      mail_fc: [''],
      content_fc: [''],
      date_fc: ['']
    })
  }

  deleteFC() {
    this.fcService.deleteformulaireContact(this.fcId).subscribe({
      next: () => {
        alert('Ce formulaire de contact a été effacé');
        this.router.navigate(['/listeFC']);
      },
      error: () => {
        alert('Une erreur est survenue.');
      }
    });
  }

  ngOnInit(): void {
    this.fcId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.fcId){
      this.fcService.getformulaireContact(this.fcId).subscribe((data: formulaireContact) => this.detailFC.patchValue(data));
    }
  }

}
