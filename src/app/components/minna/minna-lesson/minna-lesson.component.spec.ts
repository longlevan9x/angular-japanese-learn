import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinnaLessonComponent } from './minna-lesson.component';

describe('MinnaLessonComponent', () => {
  let component: MinnaLessonComponent;
  let fixture: ComponentFixture<MinnaLessonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MinnaLessonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinnaLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
