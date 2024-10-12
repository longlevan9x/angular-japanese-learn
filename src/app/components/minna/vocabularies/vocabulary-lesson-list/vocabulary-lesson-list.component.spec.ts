import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VocabularyLessonListComponent } from './vocabulary-lesson-list.component';

describe('VocabularyLessonListComponent', () => {
    let component: VocabularyLessonListComponent;
    let fixture: ComponentFixture<VocabularyLessonListComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [VocabularyLessonListComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(VocabularyLessonListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
