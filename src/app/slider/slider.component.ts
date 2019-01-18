import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { GlobalService } from '../global.service';
import { OnePhoto } from '../model/interfaces';
import { HttpErrorResponse } from '@angular/common/http';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  providers: [NgbCarouselConfig]
})
export class SliderComponent implements OnInit, OnDestroy {

  private subscription: Subscription;

  imagesAmount = new Array(2);

  $randomPhotoResponse: OnePhoto = {
    description: 'Loading...',
    urls: {
      raw: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/35771931234507.564a1d2403b3a.gif'
    }
  };

  constructor(config: NgbCarouselConfig, private gService: GlobalService) {
    config.interval = 6000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  getRandomPhoto() {
    this.subscription = this.gService.randomPhoto().subscribe(
      res => {
      this.$randomPhotoResponse = res;
    },
    (error: HttpErrorResponse) => {
      console.warn(error);
      console.error(error.status);
      if (error.status === 403) {
        this.$randomPhotoResponse.description = 'Rate Limit Exceeded! Please, come back in one hour.';
        this.$randomPhotoResponse.urls.raw = 'https://images.unsplash.com/photo-1467664631004-58beab1ece0d?ixlib=rb-1.2.1';
      }
    });
  }

  ngOnInit() {
    this.getRandomPhoto();
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

