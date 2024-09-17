import { Component, OnInit } from '@angular/core';
import { FormulaireContactService } from '../../../services/formulaire-contact.service';
import formulaireContact from '../../../models/formulaireContact';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-liste-fc',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './liste-fc.component.html',
  styleUrl: './liste-fc.component.css'
})
export class ListeFCComponent implements OnInit {

  formulaireContacts: formulaireContact[] = [];

  constructor(
    private fCService: FormulaireContactService
  ) {}

  ngOnInit(): void {
    this.fCService.getformulaireContacts().subscribe((res) => {
      this.formulaireContacts = res;
    })
    
  }

}
