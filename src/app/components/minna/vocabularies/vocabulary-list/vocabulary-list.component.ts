import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { LessonModel } from '../../../../models/lesson.model';
import { SubjectModel } from '../../../../models/subject';
import { VocabularyModel } from '../../../../models/vocabulary.model';
import { VocabularyService } from '../../../../services/vocabulary.service';

@Component({
    selector: 'app-vocabulary-list',
    templateUrl: './vocabulary-list.component.html',
    styleUrl: './vocabulary-list.component.scss',
})
export class VocabularyListComponent implements OnInit {
    vocabularies: VocabularyModel[] = [];
    lessonId: number = 0;
    lessons: LessonModel[] = [];
    subjects: SubjectModel[] = [];

    constructor(
        private vocabularyService: VocabularyService,
        private activatedRoute: ActivatedRoute,
    ) {}

    ngOnInit(): void {
        this.activatedRoute.params.subscribe((params: any) => {
            let lessonId: any = parseInt(params.id) ?? 0;
            this.lessonId = lessonId;
            this.getVocabularies(lessonId);
        });
    }

    getVocabularies(lessonId: number): void {
        this.vocabularyService
            .getVocabularyByLesson(lessonId)
            .pipe(
                map((data: any) =>
                    data.filter((d: VocabularyModel) => d.lesson === lessonId),
                ),
            )
            .subscribe((results) => {
                this.vocabularies = results as any;
            });
    }
}
