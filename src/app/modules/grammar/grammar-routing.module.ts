import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GrammarListComponent } from './grammar-list/grammar-list.component';

const routes: Routes = [
    {
        path: '',
        component: GrammarListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GrammarRoutingModule { }
