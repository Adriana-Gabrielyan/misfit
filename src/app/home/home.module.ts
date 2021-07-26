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
import { SharedModule } from '../shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    BannerComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AboutModule,
    ServicesModule,
    NewsModule,
    TrainerModule,
    GalleryModule,
    ContactModule,
    SharedModule,
    FontAwesomeModule,
    NgbModule
  ]
})
export class HomeModule { }
