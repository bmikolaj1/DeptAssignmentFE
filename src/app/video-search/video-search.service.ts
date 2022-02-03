import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMovieWrapper } from '../interfaces/movieWrapper.interface';

@Injectable({
  providedIn: 'root'
})
export class VideoSearchService {

  private baseUrl: string = "https://localhost:7140";

  constructor(private http: HttpClient) { }

  public searchMovie(input: string): Observable<IMovieWrapper>{
    return this.http.get<IMovieWrapper>(`${this.baseUrl}/Movie/?searchStr=${input}`);
  }

  public getTrailer(input: string): Observable<string>{
    return this.http.get(`${this.baseUrl}/Video/?searchStr=${input}`, {responseType: 'text'})
   }
}
