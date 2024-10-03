import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddcoursePage } from './addcourse.page';

const routes: Routes = [
  {
    path: '',
    component: AddcoursePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddcoursePageRoutingModule {}
