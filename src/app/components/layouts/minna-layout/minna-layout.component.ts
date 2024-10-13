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
    subjectPath: string = '';
    lastPath = '';
    isShowSubjectNav: boolean = false;

    subjectLabel: {[name: string]: string} = {
        vocabulary: "Từ vựng",
        grammar: 'Ngữ pháp',
        kanji: 'Hán tự'
    };

    constructor(
        private activatedRoute: ActivatedRoute,
        private lessonService: LessonService,
        private router: Router,
    ) { }

    ngOnInit(): void {
        this.urlHandle(this.router.url);

        this.router.events.subscribe((event: any) => {
            if (event instanceof NavigationEnd) {
                this.urlHandle(event.url);
            }
        });

        this.lessons = this.lessonService.getVocabularyLessons(50);

        this.subjects = this.lessonService.getSubjects();
    }

    checkSubjectNav() {
        this.isShowSubjectNav = this.lastPath != 'minna' ;
    }

    urlHandle(url: string): void {
        this.lessonId = this.getLessonIdFromUrl(url);
        this.lastPath = this.getLastSegment(url);
        this.subjectPath = this.getSubjectFromUrl(url);

        this.checkSubjectNav();
    }

    getSubjectUrl(url?: string): string {
        return [url, this.lessonId].join('/');
    }

    parseUrl(url: string): string[] {
        return url.split('/');
    }

    getLessonIdFromUrl(url: string): number {
        return this.getSegmentNumberFromUrl(url, 1);
    }

    getSubjectFromUrl(url: string): string {
        let subject = this.getSegmentFromUrl<string>(url, 2);

        return subject;
    }

    getSegmentFromUrl<T>(url: string, fromLastIndex: number): T {
        const segments = this.getSegments(url);

        let segment: any = segments[segments.length - fromLastIndex];

        return segment as T;
    }

    getLastSegment(url: string): string {
        return this.getSegmentFromUrl<string>(url, 1);
    }

    getSegmentNumberFromUrl(url: string, fromLastIndex: number): number {
        const segment: number = this.getSegmentFromUrl(url, fromLastIndex);

        return isNaN(segment) ? 0 : segment;
    }

    getSegments(url: string): string[] {
        return this.parseUrl(url);
    }

    getLessonUrl(id: number): string {
        id = id + 1;
        return this.router.url.replace(this.lessonId.toString(), id.toString());
    }
}
