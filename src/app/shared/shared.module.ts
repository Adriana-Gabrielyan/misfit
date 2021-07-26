import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { ButtonComponent } from './button/button.component';
import { TitleComponent } from './title/title.component';



@NgModule({
  declarations: [
    LoaderComponent,
    ButtonComponent,
    TitleComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    LoaderComponent,
    ButtonComponent, 
    TitleComponent
  ]
})
export class SharedModule { }
