import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddcoursePage } from './addcourse.page';

describe('AddcoursePage', () => {
  let component: AddcoursePage;
  let fixture: ComponentFixture<AddcoursePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcoursePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
