import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../environments/environment';

import { OnePhoto } from './model/interfaces';

@Injectable({
  providedIn: 'root'
})
export class GlobalService implements OnInit {
  constructor(private http: HttpClient) { }

  apiUrl = environment.apiUrl;
  apiParams = '&orientation=landscape';
  accesKey = '?client_id=f028e3c9ede7246105782861bb2d89788d2903daec5db2bfc62d2be6afb790f3';


  randomPhoto(): Observable<OnePhoto> {
    return this.http.get<OnePhoto>(`${this.apiUrl}/photos/random${this.accesKey}${this.apiParams}`);
  }

  test() {
    console.log(`${this.apiUrl}/photos/random${this.accesKey}${this.apiParams}`);
  }

  ngOnInit() {
    this.test();
  }
}
