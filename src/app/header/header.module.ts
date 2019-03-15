import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';

import { HeaderComponent} from './header-component/header-component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
