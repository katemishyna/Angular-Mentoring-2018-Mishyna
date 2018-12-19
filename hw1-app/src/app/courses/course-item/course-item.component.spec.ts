import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CourseItemComponent} from './course-item.component';
import {DebugElement} from '@angular/core';

describe('CourseItemComponent', () => {
  let component: CourseItemComponent;
  let fixture: ComponentFixture<CourseItemComponent>;
  let de: DebugElement;
  let deleteButton: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseItemComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseItemComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('on delete', () => {
    it('should emit when the button is clicked', () => {
      deleteButton = de.nativeElement.querySelectorAll('.course-item__controls-button')[1];
      spyOn(component.deleteCourse, 'emit');
      deleteButton.click();
      expect(component.deleteCourse.emit).toHaveBeenCalled();
    });
  });
});
