import { Component, OnInit } from '@angular/core';
import { grammarN3s } from './dumps/grammarN3.dump';
import { GrammarModel } from './models/grammar.model';
import { grammarN2s } from './dumps/grammarN2.dump';
import { grammarN4s } from './dumps/grammarN4.dump';

interface TopicModel {
    key: string
    value: string
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
    title = 'angular-japanese-learn';
    topics: TopicModel[] = [];
    grammar: GrammarModel = {};
    anwser: string = '';

    ngOnInit(): void {
        this.getTopics();
        this.getGrammar();
    }

    getRandomTopics(count: number): TopicModel[] {
        const shuffled = this.vnTopics.sort(() => Math.random() - 0.5);
        return shuffled.slice(0, count);
    }

    getRandomGrammar(): GrammarModel {
        const grammars = [...grammarN3s, ...grammarN2s, ...grammarN4s];
        const shuffled = grammars.sort(() => Math.random() - 0.5);
        const grammar = shuffled.slice(0, 1)[0];
        return grammar;
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
