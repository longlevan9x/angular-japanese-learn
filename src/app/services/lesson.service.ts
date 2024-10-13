import { Injectable } from '@angular/core';
import { LessonModel } from '../models/lesson.model';
import { SubjectModel } from '../models/subject';

@Injectable({
    providedIn: 'root',
})
export class LessonService {
    constructor() { }

    private __genLessons(
        length: number,
        type: string,
        url: string = '',
    ): LessonModel[] {
        const lessons: LessonModel[] = [];

        for (let index = 0; index < length; index++) {
            lessons.push({
                id: index + 1,
                lesson: `${type} bài ${index + 1}`,
                url: url,
            });
        }

        return lessons;
    }

    getVocabularyLessons(length: number, url: string = ''): LessonModel[] {
        return this.__genLessons(length, 'Từ vựng', url);
    }

    getSubjects(): SubjectModel[] {
        const subjects: SubjectModel[] = [];

        subjects.push({ name: 'Từ vựng', url: 'vocabulary' });
        subjects.push({ name: 'Ngữ pháp', url: 'grammar' });
        subjects.push({ name: 'Hán tự', url: 'kanji' });
        subjects.push({ name: 'Luyện đọc' });
        subjects.push({ name: 'Hội thoại' });
        subjects.push({ name: 'Luyện nghe' });
        subjects.push({ name: 'Bài tập' });
        subjects.push({ name: 'Kiểm tra' });
        subjects.push({ name: 'Tham khảo' });

        return subjects;
    }
}
