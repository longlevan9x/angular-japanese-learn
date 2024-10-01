import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromptComponent } from './components/prompts/prompt/prompt.component';
import { VocabularyListComponent } from './components/vocabularies/vocabulary-list/vocabulary-list.component';
import { GrammarListComponent } from './components/grammars/grammar-list/grammar-list.component';
import { KanjiListComponent } from './components/kanjis/kanji-list/kanji-list.component';
import { PracticeLayoutComponent } from './components/layouts/practice-layout/practice-layout.component';

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
                path: 'vocabulary',
                component: VocabularyListComponent,
            },
            {
                path: 'grammar',
                component: GrammarListComponent,
            },
            {
                path: 'kanji',
                component: KanjiListComponent,
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
