import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    console.log(localStorage)
  }

  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.clear();
    this.router.navigate(['/login']);
    console.log(localStorage);
  }

  
}
