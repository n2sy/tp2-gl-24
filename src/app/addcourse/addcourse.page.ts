import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.page.html',
  styleUrls: ['./addcourse.page.scss'],
})
export class AddcoursePage implements OnInit {
  constructor() {}

  ngOnInit() {}

  onSubmit(f) {
    console.log(f);
  }
}
