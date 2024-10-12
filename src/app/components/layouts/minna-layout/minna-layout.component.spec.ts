import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinnaLayoutComponent } from './minna-layout.component';

describe('MinnaLayoutComponent', () => {
    let component: MinnaLayoutComponent;
    let fixture: ComponentFixture<MinnaLayoutComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MinnaLayoutComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(MinnaLayoutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
