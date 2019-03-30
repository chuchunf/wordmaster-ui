import { Component} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-wordlist',
  template: `
        <nz-table #wordListTable [nzData]="dataSet" nzBordered="true" nzShowPagination="false"
          nzFrontPagination="false" nzScroll="{ y: '240px' }" nzSize="small">
          <thead>
            <tr>
              <th></th>
              <th nzWidth="200px">Word</th>
              <th>Sample Sentence</th>
              <th nzWidth="50px">Star</th>
              <th nzWidth="50px">Used</th>
              <th nzWidth="50px">Known</th>
            </tr>
          </thead>
          <tbody>
          <ng-template ngFor let-data [ngForOf]="wordListTable.data">
            <tr>
              <td nzShowExpand [(nzExpand)]="data.expand"></td>
              <td (click)="clickWord(data.word)">{{data.word}}</td>
              <td>{{data.sample}}</td>
              <td class="action">
                <i nz-icon [type]="'star'" [theme]="'twotone'" [twoToneColor]="'#eb2f96'"></i>
              </td>
              <td class="action">
                <i nz-icon [type]="'close-circle'" [theme]="'twotone'" [twoToneColor]="'#eb2f96'"></i>
              </td>
              <td class="action">
                <i nz-icon [type]="'check-circle'" [theme]="'twotone'" [twoToneColor]="'#eb2f96'"></i>
              </td>
            </tr>
            <tr [nzExpand]="data.expand">
                <td></td>
                <td [attr.colspan]="5">{{data.meaning}}</td>
            </tr>
          </ng-template>
          </tbody>
        </nz-table>
        <br>
        <div style="text-align: center;">
        <nz-button-group nzSize="large" style="padding-right: 20px; ">
          <button nz-button nzType="primary" [nzShape]="round" style="margin-right: 40px; ">
            <i nz-icon type="download"></i>Next 10 Words
          </button>
          <button nz-button nzType="primary" [nzShape]="round" style="margin-right: 40px; ">
            <i nz-icon type="download"></i>Custimized Search
          </button>
          <button nz-button nzType="primary" [nzShape]="round" style="margin-right: 40px; ">
            <i nz-icon type="download"></i>Review List
          </button>
          <button nz-button nzType="primary" [nzShape]="round" >
            <i nz-icon type="download"></i>Test List
          </button>
        </nz-button-group>
        </div>
        <br>
  `,
  styleUrls: ['./wordlist-component.scss']
})
export class WordListComponent {
    dataSet = [{'word': 'abcd', 'sample': 'this is a sample sentence.', 'meaning': 'means abcde'}
    , {'word': 'defg', 'sample': 'another sample sentence.', 'meaning': 'means defgh'}];

  constructor(private router: Router) { }

  public clickWord(word: String) {
    this.router.navigate(['/home/detail']);
  }
}
