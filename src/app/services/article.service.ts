import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Article } from '../Article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private apiUrl: string ="http://localhost:3000/articles";
  constructor(private http: HttpClient) { }

  getAll(): Observable<Article[]>{
    return this.http.get<Article[]>(this.apiUrl);
  }

  getItem(id: number): Observable<Article>{
    return this.http.get<Article>(`${this.apiUrl}/${id}`);
  }

  removeItem(id: number) {
    return this.http.delete<Article>(`${this.apiUrl}/${id}`);
  }

  createItem(article: Article): Observable<Article>{
    return this.http.post<Article>(this.apiUrl, article);
  }

  updateItem(id:number,article: Article): Observable<Article>{
    return this.http.put<Article>(`${this.apiUrl}/${id}`, article);
  }

}
