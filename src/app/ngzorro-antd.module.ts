import { NgModule } from "@angular/core";
import { NzGridModule } from "ng-zorro-antd/grid";
import { NzToolTipModule } from "ng-zorro-antd/tooltip";

@NgModule({
    exports: [
        NzGridModule,
        NzToolTipModule
    ],
})
export class NgZorroAntdModule { }