import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeLayoutComponent } from './practice-layout.component';

describe('PracticeLayoutComponent', () => {
    let component: PracticeLayoutComponent;
    let fixture: ComponentFixture<PracticeLayoutComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PracticeLayoutComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(PracticeLayoutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
