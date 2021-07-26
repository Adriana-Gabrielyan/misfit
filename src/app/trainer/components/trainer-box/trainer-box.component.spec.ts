import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerBoxComponent } from './trainer-box.component';

describe('TrainerBoxComponent', () => {
  let component: TrainerBoxComponent;
  let fixture: ComponentFixture<TrainerBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainerBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
