import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VocabularyRoutingModule } from './vocabulary-routing.module';
import { VocabularyListComponent } from './components/vocabularies/vocabulary-list/vocabulary-list.component';
import { SharedModule } from '../shared/shared.module';
import { NgZorroAntdModule } from '../../ngzorro-antd.module';

@NgModule({
    declarations: [
        VocabularyListComponent,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [
        CommonModule,
        VocabularyRoutingModule,
        SharedModule,
        NgZorroAntdModule
    ]
})
export class VocabularyModule { }
