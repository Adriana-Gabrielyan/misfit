import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './components/services/services.component';
import { ServicesRoutingModule } from './services-routing.module';
import { ServiceImageComponent } from './components/service-image/service-image.component';



@NgModule({
  declarations: [
    ServicesComponent,
    ServiceImageComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule
  ],
  exports:[
    ServicesComponent
  ]
})
export class ServicesModule { }
