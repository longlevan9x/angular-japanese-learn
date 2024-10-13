import { Component, OnInit } from '@angular/core';
import { KanjiModel } from '../../../../models/kanji.model';
import { KanjiService } from '../../../../services/kanji.service';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-kanji-list',
    templateUrl: './kanji-list.component.html',
    styleUrl: './kanji-list.component.scss',
})
export class KanjiListComponent implements OnInit {
    kanjis: KanjiModel[] = [];
    lessonId: number = 0;

    constructor(private kanjiService: KanjiService,
        private activatedRoute: ActivatedRoute,

    ) { }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe((params: any) => {
            let lessonId: any = parseInt(params.id) ?? 0;
            this.lessonId = lessonId;
            this.getKanjis(lessonId);
        });
    }

    getKanjis(lessonId: number): void {
        this.kanjiService
            .getKanjiByLesson(lessonId)
            .pipe(
                map((data: any) =>
                    data.filter((d: KanjiModel) => d.lesson === lessonId),
                ),
            )
            .subscribe((results) => {
                this.kanjis = results as any;
            });
    }
}
