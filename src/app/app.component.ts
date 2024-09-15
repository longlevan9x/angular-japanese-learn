import { Component, OnDestroy, OnInit } from '@angular/core';
import { grammarN3s } from './dumps/grammarN3.dump';
import { GrammarModel } from './models/grammar.model';
import { grammarN2s } from './dumps/grammarN2.dump';
import { grammarN4s } from './dumps/grammarN4.dump';
import { grammarN2trys } from './dumps/grammarN2try.dumps';
import { ChatgptExtService } from './services/chatgpt-ext.service';
import { Subscription } from 'rxjs';
import { PromptService } from './services/prompt.service';

interface TopicModel {
    key: string
    value: string
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
    title = 'angular-japanese-learn';
    topics: TopicModel[] = [];
    grammar: GrammarModel = {};
    answer: string = '';
    answerResult: string = '';

    isCollapse: boolean = false;

    answerSub$: Subscription = new Subscription();

    constructor(private chatgptExtService: ChatgptExtService, private promptService: PromptService) {

    }

    ngOnInit(): void {
        this.getTopics();
        this.getGrammar();

        this.answerSub$ = this.chatgptExtService.getExtChatgptAnswer().subscribe(result => {
            this.answerResult = result;
        })
    }

    ngOnDestroy(): void {
        this.answerSub$.unsubscribe();
    }

    getRandomTopics(count: number): TopicModel[] {
        const shuffled = this.vnTopics.sort(() => Math.random() - 0.5);
        return shuffled.slice(0, count);
    }

    getRandomGrammar(): GrammarModel {
        const grammars = [...grammarN3s, ...grammarN2s, ...grammarN4s, ...grammarN2trys];
        const shuffled = grammars.sort(() => Math.random() - 0.5);
        return shuffled.slice(0, 1)[0];
    }

    getGrammar() {
        this.grammar = this.getRandomGrammar();
    }

    getTopics() {
        this.topics = this.getRandomTopics(3);
    }

    onReloadQuestion() {
        this.getGrammar();
    }

    onReloadTopic() {
        this.getTopics();
    }

    toggleCollapse() {
        this.isCollapse = !this.isCollapse;
    }

    onCheckAnswer() {
        const prompt = this.promptService.genGrammarPrompt({ grammar: this.grammar.name, scope: this.grammar.scope, anwser: this.answer });
        this.chatgptExtService.checkAnswer(prompt);
    }

    onGetExample() {
        const prompt = this.promptService.genGrammarxamplePrompt({ grammar: this.grammar.name, scope: this.grammar.scope });
        this.chatgptExtService.checkAnswer(prompt);
    }

    vnTopics = [
        { "key": "football", "value": "Bóng đá" },
        { "key": "cooking", "value": "Nấu ăn" },
        { "key": "gardening", "value": "Làm vườn" },
        { "key": "reading", "value": "Đọc sách" },
        { "key": "art", "value": "Nghệ thuật" },
        { "key": "music", "value": "Âm nhạc" },
        { "key": "movies", "value": "Xem phim" },
        { "key": "technology", "value": "Công nghệ" },
        { "key": "science", "value": "Khoa học" },
        { "key": "history", "value": "Lịch sử" },
        { "key": "literature", "value": "Văn học" },
        { "key": "philosophy", "value": "Triết học" },
        { "key": "poetry", "value": "Thơ" },
        { "key": "fashion", "value": "Thời trang" },
        { "key": "architecture", "value": "Kiến trúc" },
        { "key": "photography", "value": "Nhiếp ảnh" },
        { "key": "travel", "value": "Du lịch" },
        { "key": "fitness", "value": "Thể dục" },
        { "key": "meditation", "value": "Thiền" },
        { "key": "astrology", "value": "Chiêm tinh" },
        { "key": "comics", "value": "Truyện tranh" },
        { "key": "gaming", "value": "Chơi game" },
        { "key": "dance", "value": "Khiêu vũ" },
        { "key": "theater", "value": "Nhà hát" },
        { "key": "cycling", "value": "Đạp xe" },
        { "key": "swimming", "value": "Bơi lội" },
        { "key": "hiking", "value": "Đi bộ đường dài" },
        { "key": "bird watching", "value": "Quan sát chim" },
        { "key": "fishing", "value": "Câu cá" },
        { "key": "diy projects", "value": "Dự án tự làm" },
        { "key": "crafting", "value": "Thủ công" },
        { "key": "painting", "value": "Hội họa" },
        { "key": "drawing", "value": "Vẽ" },
        { "key": "sculpture", "value": "Điêu khắc" },
        { "key": "pottery", "value": "Gốm" },
        { "key": "knitting", "value": "Đan" },
        { "key": "sewing", "value": "May" },
        { "key": "baking", "value": "Nướng bánh" },
        { "key": "brewing", "value": "Pha chế" },
        { "key": "wine tasting", "value": "Nếm rượu" },
        { "key": "cheese making", "value": "Làm phô mai" },
        { "key": "environmental conservation", "value": "Bảo tồn môi trường" },
        { "key": "renewable energy", "value": "Năng lượng tái tạo" },
        { "key": "robotics", "value": "Robot" },
        { "key": "space exploration", "value": "Khám phá không gian" },
        { "key": "virtual reality", "value": "Thực tế ảo" },
        { "key": "artificial intelligence", "value": "Trí tuệ nhân tạo" }
    ];
}
