import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VocabularyListComponent } from './vocabulary-list/vocabulary-list.component';
import { LessonListComponent } from './lesson-list/lesson-list.component';

const routes: Routes = [
    {
        path: '',
        component: VocabularyListComponent
    },
    {
        path: 'lessons',
        component: LessonListComponent
    },
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VocabularyRoutingModule { }
