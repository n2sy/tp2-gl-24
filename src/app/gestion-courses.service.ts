import { Injectable } from '@angular/core';
import { Course } from './models/course';

@Injectable({
  providedIn: 'root',
})
export class GestionCoursesService {
  private allCourses: Course[] = [
    new Course(
      1,
      'Angular',
      'Nidhal Jelassi',
      'https://cdn.iconscout.com/icon/premium/png-256-thumb/angular-2752246-2285063.png',
      ['components', 'services', 'pipes']
    ),
    new Course(
      2,
      'Android',
      'Alaa Bejaoui',
      'https://cdn-icons-png.flaticon.com/256/732/732179.png',
      ['activtiy', 'XML', 'Layout']
    ),
    new Course(
      3,
      'Ionic',
      'Seif Bahri',
      'https://cdn.iconscout.com/icon/free/png-256/free-ionic-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-vol-1-pack-logos-icons-3029993.png',
      ['page', 'mobile', 'hybrid']
    ),
  ];

  deleteCourse(id) {
    let i = this.allCourses.findIndex((c) => c.id == id);
    this.allCourses.splice(i, 1); // i, i+1, i+2
  }

  getCourseById(id) {
    return this.allCourses.find((c) => c.id == id);
  }

  addCourse(nCourse) {
    nCourse.id = this.allCourses[this.allCourses.length - 1].id + 1;
    nCourse.keywords = nCourse.keywords.split(',');
    this.allCourses.push(nCourse);
  }

  getAllCourses() {
    return this.allCourses;
  }
  constructor() {}
}
