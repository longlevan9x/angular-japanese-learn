import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule, registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgZorroIconModule } from './ng-zorro-icon.module';
import { NgZorroAntdModule } from './ngzorro-antd.module';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import en from '@angular/common/locales/en';
import { PromptComponent } from './components/prompts/prompt/prompt.component';
import { GrammarListComponent } from './components/grammars/grammar-list/grammar-list.component';
import { KanjiListComponent } from './components/kanjis/kanji-list/kanji-list.component';
import { VocabularyListComponent } from './components/vocabularies/vocabulary-list/vocabulary-list.component';
import { NavComponent } from './components/layouts/nav/nav.component';
import { LessonListComponent } from './components/vocabularies/lesson-list/lesson-list.component';
import { LessonCardComponent } from './components/shareds/lesson-card/lesson-card.component';

registerLocaleData(en);

@NgModule({
    declarations: [
        AppComponent,
        PromptComponent,
        GrammarListComponent,
        KanjiListComponent,
        VocabularyListComponent,
        NavComponent,
        LessonListComponent,
        LessonCardComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        CommonModule,
        NgZorroAntdModule,
        NgZorroIconModule,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [
        { provide: NZ_I18N, useValue: en_US },
        provideAnimationsAsync(),
        provideHttpClient(),
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
