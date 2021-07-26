import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainerComponent } from './components/trainer/trainer.component';
import { TrainerRoutingModule } from './trainer-routing.module';
import { TrainerBoxComponent } from './components/trainer-box/trainer-box.component';

@NgModule({
  declarations: [
    TrainerComponent,
    TrainerBoxComponent
  ],
  imports: [
    CommonModule,
    TrainerRoutingModule
  ],
  exports: [
    TrainerComponent
  ],
})
export class TrainerModule {}
