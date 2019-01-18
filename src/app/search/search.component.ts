import { Component, OnInit, OnDestroy } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { GlobalService } from '../global.service';
import { PhotoList, OnePhoto } from '../model/interfaces';
import { HttpErrorResponse } from '@angular/common/http';

import { faSearch, faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  faSearch = faSearch;
  faHeart = faHeart;

  public searchForm: FormGroup;

  $searchPhotoResponse: PhotoList = {
    results: []
  };

  errorResponse: OnePhoto = {
    description: 'Rate Limit Exceeded! Please, come back in one hour.',
    urls: {
      raw: 'https://images.unsplash.com/photo-1467664631004-58beab1ece0d?ixlib=rb-1.2.1'
    }
  };

  picsPerPage: Array<number> = [5, 10, 15, 20];

  constructor(private formBuilder: FormBuilder, private gService: GlobalService) {
    this.gService.passSearchParams(this.searchForm);
  }

  getPhotosList() {
    this.gService.photoList().subscribe(
      res => {
        this.$searchPhotoResponse = res;
      },
      (error: HttpErrorResponse) => {
        console.warn(error);
        console.error(error.status);
        if (error.status === 403) {
          this.$searchPhotoResponse.results.push(this.errorResponse);
        }
      });
  }


  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      searchFormAmount: [10, Validators.required],
      searchFormKeyword: ['', Validators.required]
    });
  }


  fillParams(event) {
    this.gService.passSearchParams(event);
  }
}


