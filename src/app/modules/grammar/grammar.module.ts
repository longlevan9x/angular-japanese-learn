import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GrammarRoutingModule } from './grammar-routing.module';
import { NgZorroAntdModule } from '../../ngzorro-antd.module';
import { SharedModule } from '../shared/shared.module';
import { GrammarListComponent } from './grammar-list/grammar-list.component';


@NgModule({
    declarations: [
        GrammarListComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [
        CommonModule,
        GrammarRoutingModule,
        SharedModule,
        NgZorroAntdModule
    ]
})
export class GrammarModule { }
