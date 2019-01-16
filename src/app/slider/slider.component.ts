import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { GlobalService } from '../global.service';
import { OnePhoto } from '../model/interfaces';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  providers: [NgbCarouselConfig]
})
export class SliderComponent implements OnInit, OnDestroy {
  constructor(config: NgbCarouselConfig, private gService: GlobalService) {
    config.interval = 1500000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
    this.getRandomPhoto();
  }

  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

  imagestest = new Array(10);

  $randomPhotoResponse: OnePhoto = {
    description: 'Loading',
    urls: {
      // tslint:disable-next-line:max-line-length
      regular: 'http://pol.faq.panasonic.com/euf/assets/images/panasonic/answer_images/UHD-FullHD-1080.jpg'
    }
  };




  getRandomPhoto() {
    this.gService.randomPhoto().subscribe(res => {
      this.$randomPhotoResponse = res;
    });
  }

  ngOnInit() {
    console.log('OnInit:');
    console.log('typeof random photo response:');
    console.log(typeof this.$randomPhotoResponse);
  }

  nextSlide = (event) => {
    console.log('Slide:');
    this.getRandomPhoto();

  }

  ngOnDestroy() {
    console.log('slider zniszczony');
  }

}

