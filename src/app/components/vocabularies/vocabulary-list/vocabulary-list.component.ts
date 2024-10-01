import { Component, OnInit } from '@angular/core';
import { VocabularyModel } from '../../../models/vocabulary.model';
import { VocabularyService } from '../../../services/vocabulary.service';

@Component({
    selector: 'app-vocabulary-list',
    templateUrl: './vocabulary-list.component.html',
    styleUrl: './vocabulary-list.component.scss',
})
export class VocabularyListComponent implements OnInit {
    vocabularies: VocabularyModel[] = [];

    filterFn = {
        structure: (value: string, item: VocabularyModel) =>
            item?.vocabulary == value,
        mean: (value: string, item: VocabularyModel) => item?.kanji == value,
        explain: (value: string, item: VocabularyModel) =>
            item?.meanVN == value,
    };

    filters = {
        structure: [
            {
                text: 'Empty',
                value: '',
            },
        ],
        mean: [
            {
                text: 'Empty',
                value: '',
            },
        ],
        explain: [
            {
                text: 'Empty',
                value: '',
            },
        ],
    };

    constructor(private vocabularyService: VocabularyService) {}

    ngOnInit(): void {
        this.vocabularyService.getVocabularyN4MNN().subscribe((results) => {
            this.vocabularies = results as any;
        });
    }
}
