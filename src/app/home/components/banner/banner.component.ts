import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


import {
  faArrowLeft,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  providers: [NgbCarouselConfig] 
})
export class BannerComponent implements OnInit {
  faArrowRight = faArrowRight;
  faArrowLeft = faArrowLeft;
  sliderImages = [
    './assets/images/banner1.jpg',
    './assets/images/banner2.jpg',
    './assets/images/banner3.jpg'
  ]
  constructor(config: NgbCarouselConfig) {
    // 
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }
  @ViewChild('carousel', { static: true }) carousel!: NgbCarousel;

  ngOnInit(): void {
  }
  prevSlide() {
    this.carousel.prev();
  }

  nextSlide() {
    this.carousel.next();
  }
}
