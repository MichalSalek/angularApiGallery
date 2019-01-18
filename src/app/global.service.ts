import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../environments/environment';

import { OnePhoto, PhotoList } from './model/interfaces';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  apiObj: any = {
    apiUrl: environment.apiUrl,
    paramsRandom: '&fit=crop&w=1000&h=600',
    accesKey: '?client_id=f028e3c9ede7246105782861bb2d89788d2903daec5db2bfc62d2be6afb790f3'
  };

  amountOfPages: number;
  queryKeyword: string;

  constructor(private http: HttpClient) { }

  fillApiObj() {
    this.apiObj.paramsSearch = `&per_page=${this.amountOfPages}&query=${this.queryKeyword}`;
  }

  passSearchParams(data) {
    if (typeof data === 'undefined') { return; }
    this.amountOfPages = data.searchFormAmount;
    this.queryKeyword = data.searchFormKeyword;
    this.fillApiObj();
  }

  randomPhoto(): Observable<OnePhoto> {
    return this.http.get<OnePhoto>(`${this.apiObj.apiUrl}/photos/random${this.apiObj.accesKey}${this.apiObj.paramsRandom}`);
  }

  photoList(): Observable<PhotoList> {
    return this.http.get<PhotoList>(`${this.apiObj.apiUrl}/search/photos${this.apiObj.accesKey}${this.apiObj.paramsSearch}`);
  }
}
