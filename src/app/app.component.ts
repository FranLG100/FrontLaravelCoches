import { Component, OnInit } from '@angular/core';
import {UserService} from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[UserService]
})
export class AppComponent implements OnInit{
  title = 'front-laravel';
  public token;
  public identity;

  constructor(
    private _userService:UserService
  ){
    this.identity=this._userService.getIdentity();
    this.token=this._userService.getToken();
  }

  ngOnInit(){
    console.log('cargado app.component');
  }
}
