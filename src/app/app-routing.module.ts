import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromptComponent } from './components/prompts/prompt/prompt.component';
import { KanjiListComponent } from './components/kanjis/kanji-list/kanji-list.component';
import { PracticeLayoutComponent } from './components/layouts/practice-layout/practice-layout.component';
import { MinnaLayoutComponent } from './components/layouts/minna-layout/minna-layout.component';
import { VocabularyLessonListComponent } from './components/minna/vocabularies/vocabulary-lesson-list/vocabulary-lesson-list.component';
import { VocabularyListComponent } from './components/minna/vocabularies/vocabulary-list/vocabulary-list.component';
import { GrammarListComponent } from './components/minna/grammars/grammar-list/grammar-list.component';

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
                        component: KanjiListComponent,
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
export class AppRoutingModule {}
