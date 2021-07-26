import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-service-image',
  templateUrl: './service-image.component.html',
  styleUrls: ['./service-image.component.css']
})
export class ServiceImageComponent implements OnInit {
  @Input() image: string = ''
  constructor() { }

  ngOnInit(): void {
  }

}
