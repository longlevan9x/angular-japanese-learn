import { Component, OnInit } from '@angular/core';
import { LessonModel } from '../../../models/lesson.model';
import { SubjectModel } from '../../../models/subject';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { LessonService } from '../../../services/lesson.service';

@Component({
    selector: 'app-minna-layout',
    templateUrl: './minna-layout.component.html',
    styleUrl: './minna-layout.component.scss',
})
export class MinnaLayoutComponent implements OnInit {
    lessonId: number = 0;
    lessons: LessonModel[] = [];
    subjects: SubjectModel[] = [];

    constructor(
        private activatedRoute: ActivatedRoute,
        private lessonService: LessonService,
        private router: Router,
    ) {}

    ngOnInit(): void {
        this.lessonId = this.getLessonIdFromUrl(this.router.url);

        this.router.events.subscribe((event: any) => {
            if (event instanceof NavigationEnd) {
                this.lessonId = this.getLessonIdFromUrl(event.url);
            }
        });

        this.lessons = this.lessonService.getVocabularyLessons(50);

        this.subjects.push({ name: 'Từ vựng', url: 'vocabulary' });
        this.subjects.push({ name: 'Ngữ pháp', url: 'grammar' });
        this.subjects.push({ name: 'Hán tự', url: 'kanji' });
        this.subjects.push({ name: 'Luyện đọc' });
        this.subjects.push({ name: 'Hội thoại' });
        this.subjects.push({ name: 'Luyện nghe' });
        this.subjects.push({ name: 'Bài tập' });
        this.subjects.push({ name: 'Kiểm tra' });
        this.subjects.push({ name: 'Tham khảo' });
    }

    getSubjectUrl(url?: string): string {
        return [url, this.lessonId].join('/');
    }

    parseUrl(url: string): any[] {
        return url.split('/');
    }

    getLessonIdFromUrl(url: string): number {
        const segments = this.parseUrl(url);

        let lessonId = segments[segments.length - 1];
        lessonId = parseInt(lessonId);

        return isNaN(lessonId) ? 0 : lessonId;
    }

    onChangeLesson(id: number): void {
        id = id + 1;
        this.router.navigateByUrl(
            this.router.url.replace(this.lessonId.toString(), id.toString()),
        );
    }
}
