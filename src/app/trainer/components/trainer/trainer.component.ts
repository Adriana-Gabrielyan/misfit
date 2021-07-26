import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css'],
})
export class TrainerComponent implements OnInit {
  trainers: any[] = [
    {
      image: '/assets/images/tra.jpg',
      name: 'sandy Mark',
      position: 'architecture',
    },
    {
      image: '/assets/images/tra0.jpg',
      name: 'limijack',
      position: 'Maping',
    },
    {
      image: '/assets/images/tra1.jpg',
      name: 'smith den',
      position: 'Metarial',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
