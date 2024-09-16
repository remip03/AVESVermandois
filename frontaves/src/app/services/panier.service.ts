import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import panier from '../models/panier.model';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  private apiUrl = 'https://localhost:8000/api';
  // private apiUrl = 'http://localhost:8000/api';

  constructor(private httpClient: HttpClient) {}

      // fonction pour récupérer la liste de tous les paniers.
  getpaniers(): Observable<panier[]> {
    return this.httpClient.get<panier[]>(`${this.apiUrl}/paniers`);
  }

      // fonction pour récupérer un panier par son Id.
  getpanier(id: number): Observable<panier> {
    return this.httpClient.get<panier>(`${this.apiUrl}/paniers/${id}`);
  }

      // fonction pour ajouter un panier.
  addpanier(panier: panier): Observable<panier> {
    return this.httpClient.post<panier>(`${this.apiUrl}/paniers`, panier);
  }

      // fonction pour modifier un panier.
  updatepanier(panier: panier): Observable<panier> {
    return this.httpClient.put<panier>(
      `${this.apiUrl}/paniers/${panier.id}`,
      panier
    );
  }

      // fonction pour supprimer un panier.
  deletepanier(id: number): Observable<panier> {
    return this.httpClient.delete<panier>(`${this.apiUrl}/paniers/${id}`);
  }
}
