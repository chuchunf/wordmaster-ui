import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';

import { WordListComponent } from './wordlist-component/wordlist-component';

@NgModule({
    declarations: [
        WordListComponent,
    ],
    imports: [
      CommonModule,
      NgZorroAntdModule,
    ],
    exports: [WordListComponent]
  })
export class MainModule { }
