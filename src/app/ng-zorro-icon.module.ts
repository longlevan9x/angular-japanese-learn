import { NgModule } from '@angular/core';
import { NzIconModule, NZ_ICONS } from 'ng-zorro-antd/icon';
import {
    CaretRightOutline,
    CaretDownOutline,
} from '@ant-design/icons-angular/icons';

const icons = [CaretRightOutline, CaretDownOutline];

@NgModule({
    imports: [NzIconModule],
    exports: [NzIconModule],
    providers: [{ provide: NZ_ICONS, useValue: icons }],
})
export class NgZorroIconModule {}
