import { Component, Input, OnInit } from '@angular/core';
import { LessonModel } from '../../../models/lesson.model';

@Component({
    selector: 'app-lesson-list',
    templateUrl: './lesson-list.component.html',
    styleUrl: './lesson-list.component.scss',
})
export class LessonListComponent implements OnInit {
    lessons: LessonModel[] = [];

    ngOnInit(): void {
        for (let index = 0; index < 50; index++) {
            this.lessons.push({ lesson: `Từ vựng bài ${index + 1}`, url: '' });
        }
    }
}
