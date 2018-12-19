import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA, DebugElement} from '@angular/core';

import {CoursesComponent} from './courses.component';
import {CourseItemComponent} from '../course-item/course-item.component';
import {By} from '@angular/platform-browser';
import {Course} from '../models/course-item.model';


describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;
  let addButton: HTMLElement;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesComponent, CourseItemComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should show add button', () => {
    addButton = de.nativeElement.querySelector('.courses__add-button');
    expect(addButton.textContent).toContain('Add course');
  });
  describe('on delete course event', () => {
    let courseObj1 = {
      id: 'id1', title: 'Video Course 1',
      creationDate: new Date(2011, 0, 1),
      duration: 33,
      description: 'Lorem'
    };
    let courseObj2 = {
      id: 'id2', title: 'Video Course 1',
      creationDate: new Date(2011, 0, 1),
      duration: 33,
      description: 'Lorem'
    };
    let courseObj3 = {
      id: 'id3', title: 'Video Course 1',
      creationDate: new Date(2011, 0, 1),
      duration: 33,
      description: 'Lorem'
    };
    it('should be called delete event', () => {
      spyOn(component, 'deleteCourse');
      const courseItem = de.query(By.directive(CourseItemComponent));
      const cmp = courseItem.componentInstance;
      cmp.deleteCourse.emit(new Course(courseObj1));
      expect(component.deleteCourse).toHaveBeenCalledWith(new Course(courseObj1));
    });
    it('should delete course by id, when it exist', () => {
      component.courses = [new Course((courseObj1)), new Course(courseObj2)];
      component.deleteCourse(new Course(courseObj1));
      expect(component.courses.length).toBe(1);
    });
    it('should not delete course by id, when it not exist', () => {
      component.courses = [new Course((courseObj1)), new Course(courseObj2)];
      component.deleteCourse(new Course(courseObj3));
      expect(component.courses.length).toBe(2);
    });
  });
  describe('on load more button click', () => {
    it('should call function', () => {
      spyOn(component, 'loadMoreClick');
      let button = de.nativeElement.querySelector('.courses__load-more');
      button.click();
      expect(component.loadMoreClick).toHaveBeenCalled();
    });
  })
});
