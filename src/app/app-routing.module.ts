import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromptComponent } from './components/prompts/prompt/prompt.component';

const routes: Routes = [
    {
        path: '',
        component: PromptComponent
    },
    {
        path: 'vocabularies',
        loadChildren: () => import('./modules/vocabulary/vocabulary.module').then(m => m.VocabularyModule)
    },
    {
        path: 'grammars',
        loadChildren: () => import('./modules/grammar/grammar.module').then(m => m.GrammarModule)
    },
    {
        path: 'kanjis',
        loadChildren: () => import('./modules/kanji/kanji.module').then(m => m.KanjiModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
