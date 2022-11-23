import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
public loggedIn=false;
  constructor(private loginService:LoginService) { 

  }

  ngOnInit(): void {
    this.loggedIn=this.loginService.isLoggedIn();
  }

logOutUser()
{
  this.loginService.logOut()
  location.reload()
  localStorage.removeItem('token');
  // this.loggedIn=false;
  // window.location.href = '/login';

}
}
