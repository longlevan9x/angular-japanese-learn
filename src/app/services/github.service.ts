import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL } from '../constants/url';
import { Observable } from 'rxjs';
import { GrammarModel } from '../models/grammar.model';

@Injectable({
    providedIn: 'root'
})
export class GithubService {

    constructor(private httpClient: HttpClient) { }

    getGrammars<T>(url: string): Observable<T> {
        const urls = [
            URL.RAW_GITHUB,
            URL.GRAMMAR,
            url
        ];

        return this.httpClient.get(urls.join('/')) as Observable<T>;
    }
}