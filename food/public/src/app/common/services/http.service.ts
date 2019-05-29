import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private _http: HttpClient) {
  }

  login = (data) => this._http.post('/sessions/login/', data);

  register = (data) => this._http.post('/sessions', data);

  getObjects = () => this._http.get('/api/objects');

  getObject = (id: string) => this._http.get('api/objects/' + id);

  addObject = (data) => this._http.post('api/objects/', data);

  updateObject = (id: string, data) => this._http.put('api/objects/' + id, data);

  deleteObject = (id: string) => this._http.delete('api/objects/' + id);



}

