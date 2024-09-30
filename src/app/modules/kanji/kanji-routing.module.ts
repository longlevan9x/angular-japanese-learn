import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KanjiListComponent } from './kanji-list/kanji-list.component';

const routes: Routes = [
    {
        path: '',
        component: KanjiListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class KanjiRoutingModule { }
