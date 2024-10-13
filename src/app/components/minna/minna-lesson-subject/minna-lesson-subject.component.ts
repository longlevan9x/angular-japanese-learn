import { Component, OnInit } from '@angular/core';
import { LessonService } from '../../../services/lesson.service';
import { SubjectModel } from '../../../models/subject';

@Component({
    selector: 'app-minna-lesson-subject',
    templateUrl: './minna-lesson-subject.component.html',
    styleUrl: './minna-lesson-subject.component.scss'
})
export class MinnaLessonSubjectComponent implements OnInit {
    subjects: SubjectModel[] = [];

    constructor(
        private lessonService: LessonService
    ) {

    }

    ngOnInit(): void {
        this.subjects = this.lessonService.getSubjects();
    }

    getSubjectUrl(path: string) {
        return '';
    }
}
