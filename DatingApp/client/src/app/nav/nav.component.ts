import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  loggedIn: boolean;
  
  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.getCurrentUser();
  }

  login()
  {
    // átadjuk a model-t
    this.accountService.login(this.model).subscribe(response => {
      console.log(response);
      this.loggedIn = true;
    },error =>{
      console.log(error);
    }) 
    // console.log(this.model);
  }

  logout()
  {
    this.accountService.logout();
    this.loggedIn = false;
  }

  getCurrentUser()
  {
    this.accountService.currentUser$.subscribe(
      (user) => 
      {
          this.loggedIn = !!user; // a usert átalakítja másik típusra (boolean-t vár)
          // null= false, ha van benne objektum, akkor true

      }, (error) =>
      {
        console.log(error);
      });
  }

}
