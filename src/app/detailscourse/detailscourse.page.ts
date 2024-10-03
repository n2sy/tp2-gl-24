import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GestionCoursesService } from '../gestion-courses.service';
import { Course } from '../models/course';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-detailscourse',
  templateUrl: './detailscourse.page.html',
  styleUrls: ['./detailscourse.page.scss'],
})
export class DetailscoursePage implements OnInit {
  selectedCourse: Course;
  constructor(
    private activatedRoute: ActivatedRoute,
    private alertCtrl: AlertController,
    private courseSer: GestionCoursesService,
    private router: Router
  ) {}

  ngOnInit() {
    // this.activatedRoute.snapshot.params['id'];
    this.selectedCourse = this.courseSer.getCourseById(
      this.activatedRoute.snapshot.paramMap.get('id')
    );
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Confirmation',
      message: 'Etes-vous sûr de vouloir supprimer ce cours ?',
      buttons: [
        {
          text: 'Oui',
          handler: () => {
            this.courseSer.deleteCourse(this.selectedCourse.id);
            this.router.navigateByUrl('/home');
          },
        },
        'Non',
      ],
    });

    await alert.present();
  }
}
