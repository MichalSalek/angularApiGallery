import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GlobalService implements OnInit {
  constructor(private http: HttpClient) { }

  // randomPhoto(): Observable {

  // }

  apiUrl = environment.apiUrl;
  apiParams = '&orientation=landscape';
  accesKey = '?client_id=f028e3c9ede7246105782861bb2d89788d2903daec5db2bfc62d2be6afb790f3';


  test() {
    console.log(`${this.apiUrl}/photos/random${this.accesKey}${this.apiParams}`);
  }

  ngOnInit() {
    // console.log(environment.apiUrl);
  }
}

interface OnePhoto {
  description: string;
  urls: {
    regular: string
  };
}

// ?client_id=f028e3c9ede7246105782861bb2d89788d2903daec5db2bfc62d2be6afb790f3
