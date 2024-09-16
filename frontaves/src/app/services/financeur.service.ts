import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import financeur from '../models/financeur.model';

@Injectable({
  providedIn: 'root'
})
export class FinanceurService {
  private apiUrl = 'https://localhost:8000/api';
  // private apiUrl = 'http://localhost:8000/api';

  constructor(private httpClient: HttpClient) {}

      // fonction pour récupérer la liste de tous les financeurs.
  getfinanceurs(): Observable<financeur[]> {
    return this.httpClient.get<financeur[]>(`${this.apiUrl}/financeurs`);
  }

      // fonction pour récupérer un financeur par son Id.
  getfinanceur(id: number): Observable<financeur> {
    return this.httpClient.get<financeur>(`${this.apiUrl}/financeurs/${id}`);
  }

      // fonction pour ajouter un financeur.
  addfinanceur(financeur: financeur): Observable<financeur> {
    return this.httpClient.post<financeur>(`${this.apiUrl}/financeurs`, financeur);
  }

      // fonction pour modifier un financeur.
  updatefinanceur(financeur: financeur): Observable<financeur> {
    return this.httpClient.put<financeur>(
      `${this.apiUrl}/financeurs/${financeur.id}`,
      financeur
    );
  }

      // fonction pour supprimer un financeur.
  deletefinanceur(id: number): Observable<financeur> {
    return this.httpClient.delete<financeur>(`${this.apiUrl}/financeurs/${id}`);
  }
}
