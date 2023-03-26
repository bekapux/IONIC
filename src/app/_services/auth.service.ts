import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public $userIsAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject(
    false
  );

  public get userIsAuthenticated(): boolean {
    return this.$userIsAuthenticated.value;
  }

  constructor(private router: Router) {}

  login() {
    this.$userIsAuthenticated.next(true);
  }

  logout() {
    this.router.navigateByUrl('/auth')
    this.$userIsAuthenticated.next(false);
  }
}
