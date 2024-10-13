import { Component, OnInit } from '@angular/core';
import { KanjiModel } from '../../../../models/kanji.model';
import { KanjiService } from '../../../../services/kanji.service';

@Component({
    selector: 'app-kanji-list',
    templateUrl: './kanji-list.component.html',
    styleUrl: './kanji-list.component.scss',
})
export class KanjiListComponent implements OnInit {
    kanjis: KanjiModel[] = [];

    filterFn = {
        structure: (value: string, item: KanjiModel) =>
            item?.vocabulary == value,
        mean: (value: string, item: KanjiModel) => item?.kanji == value,
        explain: (value: string, item: KanjiModel) => item?.kanjiVN == value,
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

    constructor(private kanjiService: KanjiService) {}

    ngOnInit(): void {
        this.kanjiService.getKanjiN4MNN().subscribe((results) => {
            this.kanjis = results as any;
        });
    }
}
