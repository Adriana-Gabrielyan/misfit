import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './components/gallery/gallery.component';
import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryImageComponent } from './components/gallery-image/gallery-image.component';
import {CrystalLightboxModule} from '@crystalui/angular-lightbox';



@NgModule({
  declarations: [
    GalleryComponent,
    GalleryImageComponent
  ],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    CrystalLightboxModule
  ],
  exports:[
    GalleryComponent
  ]
})
export class GalleryModule { }
