// infrastructure/repositories/crud.repository.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CrudRepository } from '../../domain/repositories/crud.repository';
import { Entity } from '../../domain/models/entity.model';


@Injectable({
  providedIn: 'root',
})
export class CrudRepositoryImpl<T extends Entity> extends CrudRepository<T> {
  private apiUrlBase: string;
  private apiUrl: string = '';

  constructor(private http: HttpClient) {
    super();
    this.apiUrlBase = `https://jsonplaceholder.typicode.com/posts`;
  }

  override setMethod(method: string): void {
    this.apiUrl = `${this.apiUrlBase}${method}`;
  }

  create(entity: T): Observable<T> {
    return this.http.post<T>(`${this.apiUrl}`, entity);
  }

  read(id: number | string): Observable<T | undefined> {
    return this.http.get<T>(`${this.apiUrl}/${id}`);
  }

  readObject(): Observable<T | undefined> {
    return this.http.get<T>(`${this.apiUrl}`);
  }

  update(entity: T): Observable<T | undefined> {
    return this.http.put<T>(`${this.apiUrl}`, entity);
  }

  delete(id: number | string): Observable<boolean> {
    return this.http.delete<boolean>(`${this.apiUrl}/${id}`);
  }

  list(): Observable<T[]> {
    return this.http.get<T[]>(`${this.apiUrl}`);
  }
}