import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './components/gallery/gallery.component';
import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryImageComponent } from './components/gallery-image/gallery-image.component';



@NgModule({
  declarations: [
    GalleryComponent,
    GalleryImageComponent
  ],
  imports: [
    CommonModule,
    GalleryRoutingModule
  ],
  exports:[
    GalleryComponent
  ]
})
export class GalleryModule { }
