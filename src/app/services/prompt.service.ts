import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class PromptService {

    constructor() { }

    genGrammarPrompt(input: { grammar?: string, anwser: string, scope?: string }) {
        let prompts = [];
        prompts.push(`Ngữ pháp: ${input.grammar}`);
        prompts.push(`Trình độ: ${input.scope}`);
        prompts.push("Hãy trả lời ngắn gọn.");
        prompts.push("Kiểm tra câu dưới đây đã viết đúng ngữ pháp, và đúng ngữ pháp đã nêu ở trên hay chưa:");
        prompts.push(input.anwser);
        return prompts.join('\t\n');
    }
}
