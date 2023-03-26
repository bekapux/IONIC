import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {}

  onLogin() {
    this.auth.login();
    this.router.navigateByUrl('/places/tabs/discover')
  }
}
