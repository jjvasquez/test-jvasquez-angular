import { Injectable, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root', // Se puede usar en toda la app
})
export class ToastService {
  private snackBar = inject(MatSnackBar);

  show(message: string, type: 'success' | 'info' | 'warning' | 'danger', duration: number = 30000) {
    this.snackBar.open(message, 'Cerrar', {
      duration,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: [`snackbar-${type}`], // Clases CSS personalizadas
    });
  }
}
