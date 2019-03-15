import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { jqxChartComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxchart';

import { SidebarComponent} from './sidebar-component/sidebar-component';

@NgModule({
  declarations: [
    SidebarComponent,
    jqxChartComponent,
  ],
  imports: [
    CommonModule,
    NgZorroAntdModule,
  ],
  exports: [SidebarComponent]
})
export class SidebarModule { }
