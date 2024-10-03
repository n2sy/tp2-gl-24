import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailscoursePage } from './detailscourse.page';

describe('DetailscoursePage', () => {
  let component: DetailscoursePage;
  let fixture: ComponentFixture<DetailscoursePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailscoursePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
