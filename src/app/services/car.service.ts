import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GLOBAL} from './global';
import {Car} from '../models/car';

@Injectable()

export class CarService{
    public url: string;

    constructor(
        public _http: HttpClient
    ){
        this.url=GLOBAL.url;
    }

    pruebas(){
        return 'Hola mundo!';
    }

    create(token,car:Car):Observable<any>{
        let json=JSON.stringify(car);
        let params="json="+json;

        //'token' es la cabecera que recoge el back
        let headers=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
        .set('token',token);

        return this._http.post(this.url+'coches', params, {headers:headers});
    }

    getCars():Observable<any>{
        let headers=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
        .set('token',localStorage.getItem('token'));

        return this._http.get(this.url+'coches', {headers:headers});
    }

    getCar(id):Observable<any>{
        return this._http.get(this.url+'coches/'+id);
    }

    update(token,car,id):Observable<any>{
        let json=JSON.stringify(car);
        let params = "json="+json;

        let headers=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
        .set('token',token);

        return this._http.put(this.url+'coches/'+id,params,{headers:headers});
    }

    delete(token,id):Observable<any>{
        let headers=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
        .set('token',token);

        return this._http.delete(this.url+'coches/'+id,{headers:headers});
    }
}