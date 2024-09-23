import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import images from '../models/images.models';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  private apiUrl = 'https://localhost:8000/api';
  // private apiUrl = 'http://localhost:8000/api';

  constructor(private httpClient: HttpClient) {}

      // fonction pour récupérer la liste de tous les Images.
  getImages(): Observable<images[]> {
    return this.httpClient.get<images[]>(`${this.apiUrl}/Images`);
  }

      // fonction pour récupérer un Images par son Id.
  getImage(id: number): Observable<images> {
    return this.httpClient.get<images>(`${this.apiUrl}/Images/${id}`);
  }

      // fonction pour ajouter un Images.
  addImages(Images: images): Observable<images> {
    return this.httpClient.post<images>(`${this.apiUrl}/Images`, Images);
  }

      // fonction pour modifier un Images.
  updateImages(Images: images): Observable<images> {
    return this.httpClient.put<images>(
      `${this.apiUrl}/Images/${Images.id}`,
      Images
    );
  }

      // fonction pour supprimer un Images.
  deleteImages(id: number): Observable<images> {
    return this.httpClient.delete<images>(`${this.apiUrl}/Images/${id}`);
  }

}
