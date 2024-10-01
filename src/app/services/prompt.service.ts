import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class PromptService {
    constructor() {}

    genGrammarPrompt(input: {
        grammar?: string;
        anwser: string;
        scope?: string;
    }): string {
        let prompts = [];
        prompts.push(`Ngữ pháp: ${input.grammar}`);
        prompts.push(`Trình độ: ${input.scope}`);
        prompts.push('Hãy trả lời ngắn gọn.');
        prompts.push(
            'Kiểm tra câu dưới đây đã viết đúng ngữ pháp, và đúng ngữ pháp đã nêu ở trên hay chưa:',
        );
        prompts.push(input.anwser);

        prompts = this.__addTagP(prompts);

        return this.__toStringPrompt(prompts);
    }

    genGrammarxamplePrompt(input: {
        grammar?: string;
        scope?: string;
    }): string {
        let prompts = [];
        prompts.push(`Ngữ pháp: ${input.grammar}`);
        prompts.push(`Trình độ: ${input.scope}`);
        prompts.push('Hãy gợi ý cách dịch của ngữ pháp.');
        prompts.push('Hãy giải thích cách dùng, dùng trong trường hợp nào.');
        prompts.push(
            'Hãy giải thích dùng trong ngữ cảnh nào. Ví dụ: văn nói, văn viết, trang trọng, cuộc sống.',
        );
        prompts.push(
            'Giải thích cụ thể cách kết hợp của các thể, động từ, danh từ, tính từ. Ví dụ Vて＋から.',
        );
        prompts.push('Cho ví 2 dụ với ngữ pháp trên.');

        prompts = this.__addTagP(prompts);

        return this.__toStringPrompt(prompts);
    }

    private __addTagP(prompts: string[]): string[] {
        return prompts.map((p) => {
            return `<p>${p}</p>`;
        });
    }

    private __toStringPrompt(prompts: string[]): string {
        return prompts.join('\t\n');
    }
}
