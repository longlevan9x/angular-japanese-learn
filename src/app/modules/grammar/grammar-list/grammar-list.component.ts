import { Component, OnInit } from '@angular/core';
import { GrammarModel } from '../../../models/grammar.model';
import { GrammarService } from '../../../services/grammar.service';

@Component({
    selector: 'app-grammar-list',
    templateUrl: './grammar-list.component.html',
    styleUrl: './grammar-list.component.scss'
})
export class GrammarListComponent implements OnInit {
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
