import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromptComponent } from './components/prompts/prompt/prompt.component';
import { PracticeLayoutComponent } from './components/layouts/practice-layout/practice-layout.component';
import { MinnaLayoutComponent } from './components/layouts/minna-layout/minna-layout.component';
import { VocabularyLessonListComponent } from './components/minna/vocabularies/vocabulary-lesson-list/vocabulary-lesson-list.component';
import { VocabularyListComponent } from './components/minna/vocabularies/vocabulary-list/vocabulary-list.component';
import { GrammarListComponent } from './components/minna/grammars/grammar-list/grammar-list.component';
import { KanjiListComponent } from './components/minna/kanjis/kanji-list/kanji-list.component';
import { MinnaLessonComponent } from './components/minna/minna-lesson/minna-lesson.component';
import { MinnaLessonSubjectComponent } from './components/minna/minna-lesson-subject/minna-lesson-subject.component';



const routes: Routes = [
    {
        path: '',
        component: PromptComponent,
    },
    {
        path: 'practice',
        component: PracticeLayoutComponent,
        children: [
            {
                path: 'minna',
                component: MinnaLayoutComponent,
                children: [
                    {
                        path: '',
                        component: MinnaLessonComponent,
                    },
                    {
                        path: 'vocabulary',
                        children: [
                            {
                                path: '',
                                component: VocabularyLessonListComponent,
                            },
                            {
                                path: ':id',
                                component: VocabularyListComponent,
                            },
                        ],
                    },
                    {
                        path: 'grammar',
                        children: [
                            {
                                path: '',
                                component: GrammarListComponent,
                            },
                            {
                                path: ':id',
                                component: GrammarListComponent,
                            },
                        ],
                    },
                    {
                        path: 'kanji',
                        children: [
                            {
                                path: '',
                                component: KanjiListComponent,
                            },
                            {
                                path: ':id',
                                component: KanjiListComponent,
                            },
                        ]
                    },
                ],
            },
        ],
    },
    // {
    //     path: '**',
    //     redirectTo: '',
    // },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
