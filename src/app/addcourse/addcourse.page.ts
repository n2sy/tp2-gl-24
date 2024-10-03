import { Component, OnInit } from '@angular/core';
import { GestionCoursesService } from '../gestion-courses.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.page.html',
  styleUrls: ['./addcourse.page.scss'],
})
export class AddcoursePage implements OnInit {
  constructor(
    private courseSer: GestionCoursesService,
    private router: Router
  ) {}

  ngOnInit() {}

  onSubmit(formValue) {
    this.courseSer.addCourse(formValue);
    this.router.navigateByUrl('/home');
  }
}
