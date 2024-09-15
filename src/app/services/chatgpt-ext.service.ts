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

    private __postMessage(m: { from: string, action: string, prompt: string }): void {
        window.postMessage(m, "*");
    }

    checkAnswer(answer: string): void {
        this.__postMessage({ from: "WEBPAGE", action: "CHECK_ANSWER", prompt: answer });
    }

    getGrammarExample(prompt: string) {
        this.__postMessage({ from: "WEBPAGE", action: "GET_GRAMMAR_EXAMPLE", prompt: prompt })
    }

    listenMessageFromExt() {
        window.addEventListener('message', (event) => {
            // console.log("listenMessageFromExt event", event);
            const data = event.data;
            const origin = event.origin;
            const action = data.action;

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
