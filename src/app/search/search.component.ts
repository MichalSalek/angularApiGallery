import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

  searchForm: FormGroup;

  picsPerPage: Array<number> = [5, 10, 15, 20];

  constructor(private formBuilder: FormBuilder) {  }

  ngOnInit() {
this.searchForm = this.formBuilder.group({
    searchFormAmount: [10, Validators.required],
    searchFormKeyword: ['', Validators.required]
});
  }


  searchSubmit(event) {
    console.log(event);
  }



  ngOnDestroy() {
    console.log('search component zniszczony');
  }
}


