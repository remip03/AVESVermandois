import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import user from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://localhost:8000/api';
  // private apiUrl = 'http://localhost:8000/api';

  constructor(private httpClient: HttpClient) {}

    // fonction pour récupérer la liste de tous les users.
  getusers(): Observable<user[]> {
    return this.httpClient.get<user[]>(`${this.apiUrl}/users`);
  }

    // fonction pour récupérer un user par son Id.
  getuser(id: number): Observable<user> {
    return this.httpClient.get<user>(`${this.apiUrl}/users/${id}`);
  }

    // fonction pour ajouter un user.
  adduser(user: user): Observable<user> {
    return this.httpClient.post<user>(`${this.apiUrl}/users`, user);
  }

    // fonction pour modifier un user.
  updateuser(user: user): Observable<user> {
    return this.httpClient.put<user>(
      `${this.apiUrl}/users/${user.id}`,
      user
    );
  }

    // fonction pour supprimer un user.
  deleteuser(id: number): Observable<user> {
    return this.httpClient.delete<user>(`${this.apiUrl}/users/${id}`);
  }
}
