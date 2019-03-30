import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WordListComponent } from './wordlist-component/wordlist-component';
import { WordDetailComponent } from './worddetail-component/worddetail-component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [{
      path: '',
      children: [
        {path: 'list', component: WordListComponent},
        {path: 'detail', component: WordDetailComponent},
        {path: '', component: WordListComponent},
      ]
    }]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {}
