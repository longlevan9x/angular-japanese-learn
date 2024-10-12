import { Component, OnInit } from '@angular/core';
import { LessonModel } from '../../../../models/lesson.model';
import { LessonService } from '../../../../services/lesson.service';

@Component({
    selector: 'app-vocabulary-lesson-list',
    templateUrl: './vocabulary-lesson-list.component.html',
    styleUrl: './vocabulary-lesson-list.component.scss',
})
export class VocabularyLessonListComponent implements OnInit {
    lessons: LessonModel[] = [];

    constructor(private lessonService: LessonService) {}

    ngOnInit(): void {
        this.lessons = this.lessonService.getVocabularyLessons(50);
    }
}
