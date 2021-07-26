import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
 images = [
   './assets/images/service1.jpg',
   './assets/images/service2.jpg',
   './assets/images/service3.jpg'
 ]
  constructor() { }

  ngOnInit(): void {
  }

}
