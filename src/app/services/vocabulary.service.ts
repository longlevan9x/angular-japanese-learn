import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GrammarModel } from '../models/grammar.model';
import { GithubService } from './github.service';
import { VocabularyModel } from '../models/vocabulary.model';

@Injectable({
    providedIn: 'root',
})
export class VocabularyService {
    constructor(private githubService: GithubService) {}

    getVocabularyN4MNN(): Observable<VocabularyModel> {
        return this.githubService.getVocabularies('vocabularyN4_MNN.json');
    }
}
