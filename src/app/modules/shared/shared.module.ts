import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavComponent } from './nav/nav.component';


@NgModule({
    declarations: [
        NavComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [
        CommonModule,
        SharedRoutingModule
    ],
    exports: [NavComponent]

})
export class SharedModule { }