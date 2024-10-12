import { Injectable } from '@angular/core';
import { GithubService } from './github.service';
import { VocabularyModel } from '../models/vocabulary.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class VocabularyService {
    constructor(private githubService: GithubService) {}

    getVocabularyN4MNN(): Observable<VocabularyModel> {
        return this.githubService.getVocabularies('vocabularyN4_MNN.json');
    }

    getVocabularyByLesson(lessonId: number) {
        let url = 'vocabularyN4_MNN.json';

        if (lessonId <= 25) {
            url = 'vocabularyN5_MNN.json';
        }

        return this.githubService.getVocabularies(url);
    }
}
