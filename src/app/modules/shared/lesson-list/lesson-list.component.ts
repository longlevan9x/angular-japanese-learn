import { Component, Input, OnInit } from '@angular/core';
import { LessonModel } from '../../../models/lesson.model';

@Component({
    selector: 'app-shared-lesson-list',
    templateUrl: './lesson-list.component.html',
    styleUrl: './lesson-list.component.scss'
})
export class LessonListComponent implements OnInit {
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
