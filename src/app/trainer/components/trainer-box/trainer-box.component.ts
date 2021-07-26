import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-trainer-box',
  templateUrl: './trainer-box.component.html',
  styleUrls: ['./trainer-box.component.css'],
})
export class TrainerBoxComponent implements OnInit {
  @Input() trainer = {
    image: '',
    name: '',
    position: ''
  };

  constructor() {}

  ngOnInit(): void {}
}
