import { Component, OnInit } from '@angular/core';
import { LessonModel } from '../../../models/lesson.model';
import { LessonService } from '../../../services/lesson.service';

@Component({
    selector: 'app-minna-lesson',
    templateUrl: './minna-lesson.component.html',
    styleUrl: './minna-lesson.component.scss'
})
export class MinnaLessonComponent implements OnInit {
    lessons: LessonModel[] = [];

    constructor(private lessonService: LessonService) { }

    ngOnInit(): void {
        this.lessons = this.lessonService.getVocabularyLessons(50);
        this.lessons = this.lessons.map((item, i) => {
            item.url = `vocabulary/${i + 1}`;
            return item;
        });
    }
}
