import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinnaLessonSubjectComponent } from './minna-lesson-subject.component';

describe('MinnaLessonSubjectComponent', () => {
  let component: MinnaLessonSubjectComponent;
  let fixture: ComponentFixture<MinnaLessonSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MinnaLessonSubjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinnaLessonSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
