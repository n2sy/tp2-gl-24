import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailscoursePageRoutingModule } from './detailscourse-routing.module';

import { DetailscoursePage } from './detailscourse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailscoursePageRoutingModule
  ],
  declarations: [DetailscoursePage]
})
export class DetailscoursePageModule {}
