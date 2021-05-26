import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'https://jsonplaceholder.typicode.com';
  constructor(private httpClient: HttpClient) {}

  getAlbums = () => {
    return this.httpClient.get(`${this.apiUrl}/albums`);
  };

  getAlbumPhotos = (albumId: number) => {
    return this.httpClient.get(`${this.apiUrl}/photos?albumId${albumId}}`);
  };
  addPhoto = (title: string, url: string) => {
    return this.httpClient.post(`${this.apiUrl}/photos`, { title, url });
  };
  editPhoto = (id: number, title: string, url: string) => {
    return this.httpClient.put(`${this.apiUrl}/photos/${id}`, { title, url });
  };
  deletePhoto = (id: number) => {
    return this.httpClient.delete(`${this.apiUrl}/photos/${id}`);
  };
}
