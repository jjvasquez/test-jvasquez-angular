import { Injectable } from '@angular/core';
import { User } from '../models/user.model';



@Injectable({
  providedIn: 'root'
})
export abstract class AuthRepository {
  private users: User[] = [];

  abstract login(username: string, password: string): User | null


}