import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

@NgModule({
    exports: [
        NzGridModule,
        NzToolTipModule,
        NzTableModule,
        NzDropDownModule,
        NzButtonModule,
    ],
})
export class NgZorroAntdModule {}
