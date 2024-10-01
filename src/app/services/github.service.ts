import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL } from '../constants/url';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class GithubService {
    constructor(private httpClient: HttpClient) {}

    getGrammars<T>(url: string): Observable<T> {
        const urls = [URL.RAW_GITHUB, URL.GRAMMAR, url];

        return this.httpClient.get(urls.join('/')) as Observable<T>;
    }

    getVocabularies<T>(url: string): Observable<T> {
        const urls = [URL.RAW_GITHUB, URL.VOCABULARY, url];

        return this.httpClient.get(urls.join('/')) as Observable<T>;
    }

    getKanjis<T>(url: string): Observable<T> {
        const urls = [URL.RAW_GITHUB, URL.KANJI, url];

        return this.httpClient.get(urls.join('/')) as Observable<T>;
    }
}
