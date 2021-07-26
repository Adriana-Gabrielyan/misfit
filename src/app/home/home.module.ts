import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './components/home/home.component';

import { AboutModule } from '../about/about.module';
import { ServicesModule } from '../services/services.module';
import { NewsModule } from '../news/news.module';
import { TrainerModule } from '../trainer/trainer.module';
import { GalleryModule } from '../gallery/gallery.module';
import { ContactModule } from '../contact/contact.module';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [
    BannerComponent,
    HomeComponent, 
  ],
  imports: [
    CommonModule,
    AboutModule,
    ServicesModule,
    NewsModule,
    TrainerModule,
    GalleryModule,
    ContactModule,
    HomeRoutingModule
  ],
  exports:[
    BannerComponent,
  ]
})
export class HomeModule { }
