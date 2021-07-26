import { Component, OnInit } from '@angular/core';
import {
  faMapMarker,
  faEnvelope,
  faMobile,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  faMapMarker = faMapMarker;
  faEnvelope = faEnvelope;
  faMobile = faMobile;

  constructor() {}

  ngOnInit(): void {}
}
