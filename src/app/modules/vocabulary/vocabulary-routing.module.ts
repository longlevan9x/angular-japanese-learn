import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VocabularyListComponent } from './components/vocabularies/vocabulary-list/vocabulary-list.component';

const routes: Routes = [
    {
        path: '',
        component: VocabularyListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VocabularyRoutingModule { }
