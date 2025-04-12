import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { WorkOrder } from '../../domain/models/work-order.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { debounceTime, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class WorkOrderRepository {
 
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  // Método para obtener todas las órdenes de trabajo con debounceTime
  getAllWithDebounce(): Observable<WorkOrder[]> {
    const url = `${this.apiUrl}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    // Simulando un flujo de eventos con debounceTime
    return of(null).pipe(
      debounceTime(300), // Espera 300ms antes de continuar
      switchMap(() => this.http.get<WorkOrder[]>(url, { headers }))
    );
  }
}
