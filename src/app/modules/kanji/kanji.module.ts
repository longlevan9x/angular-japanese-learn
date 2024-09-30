import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KanjiRoutingModule } from './kanji-routing.module';
import { KanjiListComponent } from './kanji-list/kanji-list.component';
import { SharedModule } from '../shared/shared.module';
import { NgZorroAntdModule } from '../../ngzorro-antd.module';


@NgModule({
    declarations: [
        KanjiListComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [
        CommonModule,
        KanjiRoutingModule,
        SharedModule,
        NgZorroAntdModule
    ]
})
export class KanjiModule { }
