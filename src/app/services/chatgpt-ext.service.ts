import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ChatgptExtService {

    extChatgptAnswerSub$: BehaviorSubject<string> = new BehaviorSubject<string>("");

    constructor() {
        this.listenMessageFromExt();
    }

    private __postMessage(mess: any) {
        window.postMessage({ from: "WEBPAGE", action: "QUESTION", prompt: mess }, "*");
    }

    checkAnswer(answer: string) {
        this.__postMessage(answer);
    }

    listenMessageFromExt() {
        window.addEventListener('message', (event) => {
            // console.log("listenMessageFromExt event", event);
            const data = event.data;
            const origin = event.origin;

            if (data.from === "WEBPAGE") {
                return;
            }

            this.setExtChatgptAnswer(data.result);
        });
    }

    setExtChatgptAnswer(answer: string) {
        this.extChatgptAnswerSub$.next(answer);
    }

    getExtChatgptAnswer(): Observable<string> {
        return this.extChatgptAnswerSub$.asObservable();
    }
}
