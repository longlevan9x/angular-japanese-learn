import { Component, OnInit } from '@angular/core';
import { GrammarService } from '../../../../../services/grammar.service';
import { GrammarModel } from '../../../../../models/grammar.model';

@Component({
    selector: 'app-vocabulary-list',
    templateUrl: './vocabulary-list.component.html',
    styleUrl: './vocabulary-list.component.scss'
})
export class VocabularyListComponent implements OnInit {
    grammars: GrammarModel[] = [];

    filterFn = {
        structure: (value: string, item: GrammarModel) => item?.structure == value,
        mean: (value: string, item: GrammarModel) => item?.mean == value,
        explain: (value: string, item: GrammarModel) => item?.explain == value,
    };

    filters = {
        structure: [
            {
                text: 'Empty',
                value: ''
            }
        ],
        mean: [
            {
                text: 'Empty',
                value: ''
            }
        ],
        explain: [
            {
                text: 'Empty',
                value: ''
            }
        ]
    }


    constructor(private grammarService: GrammarService) { }

    ngOnInit(): void {
        this.grammarService.getGrammarN4MNN().subscribe(results => {
            this.grammars = results as any;
        });
    }
}
