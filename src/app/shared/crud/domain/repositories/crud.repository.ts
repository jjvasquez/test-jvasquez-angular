import { Observable } from 'rxjs';
import { Entity } from '../models/entity.model';

export abstract class CrudRepository<T extends Entity> {
  abstract setMethod(methodo: string): void;
  abstract create(entity: T): Observable<T>;
  abstract read(id: number | string): Observable<T | undefined>;
  abstract readObject(): Observable<T | undefined>;
  abstract update(entity: T): Observable<T | undefined>;
  abstract delete(id: number | string): Observable<boolean>;
  abstract list(): Observable<T[]>;
}