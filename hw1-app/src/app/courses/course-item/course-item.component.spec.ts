import {Component, DebugElement} from '@angular/core';
import {Course, ICourse} from '../models/course-item.model';

import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CourseItemComponent} from './course-item.component';
import {click} from "../../../../testing/index";

@Component({
  template: `
    <course-item
      [courseItem]="course" (deleteCourse)="deleteCourse($event)">
    </course-item>`
})
class TestHostComponent {
  public courses: ICourse[] = [];
  public course: Course = new Course({
    id: 'id1', title: 'Video Course 1',
    creationDate: new Date(2011, 0, 1),
    duration: 33,
    description: 'Lorem'
  });

  public deleteCourse(course: ICourse) {
    const courseIndex = this.courses.findIndex((item) => item.id === course.id);
    if (courseIndex !== -1) {
      this.courses.splice(courseIndex, 1);
    }
  }
}

fdescribe('CourseItemComponent', () => {
  let testHost: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let de: DebugElement;
  let deleteButton: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseItemComponent, TestHostComponent]
    })
      .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    testHost = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });
  describe('input test', () => {
    it('should display course title', () => {
      const courseTitleEl = de.nativeElement.querySelector('.course-item__title');
      const expectedPipedTitle = testHost.course.title;
      expect(courseTitleEl.textContent).toContain(expectedPipedTitle);
    });
  });

  describe('output test', () => {
    it('should delete course by id on click', () => {
      testHost.courses = [new Course({
        id: 'id1', title: 'Video Course 1',
        creationDate: new Date(2011, 0, 1),
        duration: 33,
        description: 'Lorem'
      })];
      fixture.detectChanges();
      const deleteButton = de.nativeElement.querySelectorAll('.course-item__controls-button')[1];
      click(deleteButton);
      expect(testHost.courses.length).toBe(0);
    });

    it('should not delete course if no such id', () => {
      testHost.courses = [new Course({
        id: 'id3', title: 'Video Course 1',
        creationDate: new Date(2011, 0, 1),
        duration: 33,
        description: 'Lorem'
      })];
      fixture.detectChanges();
      const deleteButton = de.nativeElement.querySelectorAll('.course-item__controls-button')[1];
      click(deleteButton);
      expect(testHost.courses.length).toBe(1);
    });
  });
});


// import {async, ComponentFixture, TestBed} from '@angular/core/testing';
//
// import {CourseItemComponent} from './course-item.component';
// import {DebugElement} from '@angular/core';
//
// describe('CourseItemComponent', () => {
//   let component: CourseItemComponent;
//   let fixture: ComponentFixture<CourseItemComponent>;
//   let de: DebugElement;
//   let deleteButton: HTMLElement;
//
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [CourseItemComponent]
//     })
//       .compileComponents();
//   }));
//
//   beforeEach(() => {
//     fixture = TestBed.createComponent(CourseItemComponent);
//     component = fixture.componentInstance;
//     de = fixture.debugElement;
//     fixture.detectChanges();
//   });
//
//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
//   describe('on delete', () => {
//     it('should emit when the button is clicked', () => {
//       deleteButton = de.nativeElement.querySelectorAll('.course-item__controls-button')[1];
//       spyOn(component.deleteCourse, 'emit');
//       deleteButton.click();
//       expect(component.deleteCourse.emit).toHaveBeenCalled();
//     });
//   });
// });
