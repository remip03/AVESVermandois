import { Component, OnInit } from '@angular/core';
import panier from '../../models/panier.model';
import { PanierService } from '../../services/panier.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-panier',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.css'
})
export class PanierComponent implements OnInit{

  listePaniers: panier[] = [];

  constructor(
    private panierService: PanierService
  ) {  }

  ngOnInit(): void {
    this.panierService.getpaniers().subscribe((res) => {
      this.listePaniers = res;
    })
  }

}
