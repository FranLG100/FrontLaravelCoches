import { Component, OnInit } from '@angular/core';

import {Router,ActivatedRoute,Params} from '@angular/router';
import {Car} from '../../models/car';
import {UserService} from '../../services/user.service'; 

@Component({
  selector: 'app-car-new',
  templateUrl: './car-new.component.html',
  providers:[UserService]
})
export class CarNewComponent implements OnInit {
  public page_title:string;
  public identity;
  public token;
  public car:Car;

  constructor(
    private _route:ActivatedRoute,
    private _router:Router,
    private _userService:UserService
  ) { 
    this.page_title='Crear nuevo coche';
    this.identity=this._userService.getIdentity();
    this.token=this._userService.getToken();
  }

  ngOnInit() {
    if(this.identity==null){
      this._router.navigate(['login']);
    }else{
      //Crear objeto coche
      this.car=new Car(1,'','',0,'',null,null);
    }
  }

  onSubmit(form){
    console.log(this.car);
  }

}
