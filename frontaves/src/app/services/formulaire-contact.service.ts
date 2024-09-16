import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import formulaireContact from '../models/formulaireContact';

@Injectable({
  providedIn: 'root'
})
export class FormulaireContactService {
  private apiUrl = 'https://localhost:8000/api';
  // private apiUrl = 'http://localhost:8000/api';

  constructor(private httpClient: HttpClient) {}

      // fonction pour récupérer la liste de tous les formulaireContacts.
  getformulaireContacts(): Observable<formulaireContact[]> {
    return this.httpClient.get<formulaireContact[]>(`${this.apiUrl}/formulaireContacts`);
  }

      // fonction pour récupérer un formulaireContact par son Id.
  getformulaireContact(id: number): Observable<formulaireContact> {
    return this.httpClient.get<formulaireContact>(`${this.apiUrl}/formulaireContacts/${id}`);
  }

      // fonction pour ajouter un formulaireContact.
  addformulaireContact(formulaireContact: formulaireContact): Observable<formulaireContact> {
    return this.httpClient.post<formulaireContact>(`${this.apiUrl}/formulaireContacts`, formulaireContact);
  }

      // fonction pour modifier un formulaireContact.
  updateformulaireContact(formulaireContact: formulaireContact): Observable<formulaireContact> {
    return this.httpClient.put<formulaireContact>(
      `${this.apiUrl}/formulaireContacts/${formulaireContact.id}`,
      formulaireContact
    );
  }

      // fonction pour supprimer un formulaireContact.
  deleteformulaireContact(id: number): Observable<formulaireContact> {
    return this.httpClient.delete<formulaireContact>(`${this.apiUrl}/formulaireContacts/${id}`);
  }
}
