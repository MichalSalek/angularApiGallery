import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  providers: [NgbCarouselConfig]
})
export class SliderComponent implements OnInit, OnDestroy {
  constructor(config: NgbCarouselConfig, private gService: GlobalService) {
    config.interval = 5000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);


  ngOnInit() {
    console.log('OnInit:');
    this.gService.test();
  }


  nextSlide = (event) => {
    console.log('slajd:');
    this.gService.test();
  }

  ngOnDestroy() {
    console.log('slider zniszczony');
  }

}
