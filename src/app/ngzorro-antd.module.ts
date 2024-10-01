import { NgModule } from '@angular/core';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

@NgModule({
    exports: [NzGridModule, NzToolTipModule, NzTableModule],
})
export class NgZorroAntdModule {}
