import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Entity } from '../../domain/models/entity.model';
import { CrudRepository } from '../../domain/repositories/crud.repository';

@Injectable({
  providedIn: 'root',
})
export class CrudUseCase<T extends Entity> {
  constructor(private repository: CrudRepository<T>) {}

  setMethod(method: string): void {
    return this.repository.setMethod(method);
  }

  create(entity: T): Observable<T> {
    return this.repository.create(entity);
  }

  read(id: number | string): Observable<T | undefined> {
    return this.repository.read(id);
  }

  readObject(): Observable<T | undefined> {
    return this.repository.readObject();
  }

  update(entity: T): Observable<T | undefined> {
    return this.repository.update(entity);
  }

  delete(id: number | string): Observable<boolean> {
    return this.repository.delete(id);
  }

  list(): Observable<T[]> {
    return this.repository.list();
  }
}