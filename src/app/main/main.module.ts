import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';

import { HeaderModule } from '../header/header.module';
import { SidebarModule } from '../sidebar/sidebar.module';
import { MainRoutingModule } from './main-routing.module';

import { WordListComponent } from './wordlist-component/wordlist-component';
import { WordDetailComponent } from './worddetail-component/worddetail-component';
import { MainComponent } from './main-component';
import { HomeComponent } from './home.component';

@NgModule({
    declarations: [
        WordListComponent,
        WordDetailComponent,
        MainComponent,
        HomeComponent,
    ],
    imports: [
      CommonModule,
      NgZorroAntdModule,
      MainRoutingModule,
      HeaderModule,
      SidebarModule,
    ],
    exports: [
      MainComponent,
      HomeComponent,
      WordListComponent,
      WordDetailComponent,
    ]
  })
export class MainModule { }
