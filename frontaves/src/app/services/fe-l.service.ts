import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import FeL from '../models/FeL.model';

@Injectable({
  providedIn: 'root'
})
export class FeLService {
  private apiUrl = 'https://localhost:8000/api';
  // private apiUrl = 'http://localhost:8000/api';

  constructor(private httpClient: HttpClient) {}

      // fonction pour récupérer la liste de tous les FeLs.
  getFeLs(): Observable<FeL[]> {
    return this.httpClient.get<FeL[]>(`${this.apiUrl}/FeLs`);
  }

      // fonction pour récupérer un FeL par son Id.
  getFeL(id: number): Observable<FeL> {
    return this.httpClient.get<FeL>(`${this.apiUrl}/FeLs/${id}`);
  }

      // fonction pour ajouter un FeL.
  addFeL(FeL: FeL): Observable<FeL> {
    return this.httpClient.post<FeL>(`${this.apiUrl}/FeLs`, FeL);
  }

      // fonction pour modifier un FeL.
  updateFeL(FeL: FeL): Observable<FeL> {
    return this.httpClient.put<FeL>(
      `${this.apiUrl}/FeLs/${FeL.id}`,
      FeL
    );
  }

      // fonction pour supprimer un FeL.
  deleteFeL(id: number): Observable<FeL> {
    return this.httpClient.delete<FeL>(`${this.apiUrl}/FeLs/${id}`);
  }
}
