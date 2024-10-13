import { Injectable } from '@angular/core';
import { KanjiModel } from '../models/kanji.model';
import { Observable } from 'rxjs';
import { GithubService } from './github.service';

@Injectable({
    providedIn: 'root',
})
export class KanjiService {
    constructor(private githubService: GithubService) {}

    getKanjiN4MNN(): Observable<KanjiModel> {
        return this.githubService.getKanjis('kanjiN4_MNN.json');
    }

    getKanjiByLesson(lessonId: number) {
        let url = 'kanjiN4_MNN.json';

        if (lessonId <= 25) {
            url = 'kanjiN5_MNN.json';
        }

        return this.githubService.getKanjis(url);
    }
}
