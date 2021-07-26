import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  images = [
    '/assets/images/gallery1.jpg',
    '/assets/images/gallery2.jpg',
    '/assets/images/gallery3.jpg',
    '/assets/images/gallery4.jpg',
    '/assets/images/gallery5.jpg',
    '/assets/images/gallery6.jpg'
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
