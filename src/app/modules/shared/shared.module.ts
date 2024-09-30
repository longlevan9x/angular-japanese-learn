import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavComponent } from './nav/nav.component';
import { LessonListComponent } from './lesson-list/lesson-list.component';


@NgModule({
    declarations: [
        NavComponent,
        LessonListComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [
        CommonModule,
        SharedRoutingModule
    ],
    exports: [
        NavComponent,
        LessonListComponent
    ]

})
export class SharedModule { }