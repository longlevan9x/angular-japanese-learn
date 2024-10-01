import { Injectable } from '@angular/core';
import { GithubService } from './github.service';
import { Observable } from 'rxjs';
import { GrammarModel } from '../models/grammar.model';

@Injectable({
    providedIn: 'root',
})
export class GrammarService {
    constructor(private githubService: GithubService) {}

    getGrammarN4MNN(): Observable<GrammarModel> {
        return this.githubService.getGrammars('grammarN4_MNN.json');
    }
}
