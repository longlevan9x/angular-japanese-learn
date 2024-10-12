import { Injectable } from '@angular/core';
import { LessonModel } from '../models/lesson.model';

@Injectable({
    providedIn: 'root',
})
export class LessonService {
    constructor() {}

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
}
