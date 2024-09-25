import { Component, OnInit } from '@angular/core';
import financeur from '../../models/financeur.model';
import { FinanceurService } from '../../services/financeur.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-financeurs',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './financeurs.component.html',
  styleUrl: './financeurs.component.css'
})
export class FinanceursComponent implements OnInit {

  listeFinanceurs: financeur[] = [];

  constructor(
    private financeurService: FinanceurService,
  ) {}

  deleteFinanceur(id:number) {
    this.financeurService.deletefinanceur(id).subscribe({
      next: () => {
        alert('Ce financeur a été effacé');
      },
      error: () => {
        alert('Une erreur est survenue.');
      }
    });
  }

  ngOnInit(): void {
    this.financeurService.getfinanceurs().subscribe((res) => {
      this.listeFinanceurs = res;
    })
  }

}
