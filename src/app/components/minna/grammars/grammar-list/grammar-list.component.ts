import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { GrammarModel } from '../../../../models/grammar.model';
import { GrammarService } from '../../../../services/grammar.service';

@Component({
    selector: 'app-grammar-list',
    templateUrl: './grammar-list.component.html',
    styleUrl: './grammar-list.component.scss',
})
export class GrammarListComponent implements OnInit {
    grammars: GrammarModel[] = [];
    lessonId: number = 0;

    constructor(private grammarService: GrammarService,
        private activatedRoute: ActivatedRoute,

    ) { }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe((params: any) => {
            let lessonId: any = parseInt(params.id) ?? 0;
            this.lessonId = lessonId;
            this.getGrammars(lessonId);
        });
    }

    getGrammars(lessonId: number): void {
        this.grammarService
            .getGrammarByLesson(lessonId)
            .pipe(
                map((data: any) =>
                    data.filter((d: GrammarModel) => d.lesson === lessonId),
                ),
            )
            .subscribe((results: any[]) => {
                results = results.map(r => {
                    r.active = true;
                    return r;
                });
                this.grammars = results as any;
            });
    }
    
    toggleDetail(index: number, grammar: GrammarModel): void {
        grammar.active = !grammar.active;
    }
}
