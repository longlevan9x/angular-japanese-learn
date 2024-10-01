import { Component, Input, OnInit } from '@angular/core';
import { LessonModel } from '../../../models/lesson.model';

@Component({
    selector: 'app-lesson-card',
    templateUrl: './lesson-card.component.html',
    styleUrl: './lesson-card.component.scss',
})
export class LessonCardComponent implements OnInit {
    @Input() lessons: LessonModel[] = [];

    lessonsLeft: LessonModel[] = [];
    lessonsRight: LessonModel[] = [];

    ngOnInit(): void {
        const lessonLength = this.lessons.length;
        const midNum = lessonLength / 2;

        this.lessonsLeft = this.lessons.slice(0, midNum);
        this.lessonsRight = this.lessons.slice(midNum);
    }
}
