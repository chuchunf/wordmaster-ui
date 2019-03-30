import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  template: `
  <nz-header>
    <div class="logo"></div>
    <div style="float: right; ">
      <input
        type="text"
        nz-input
        placeholder="input search word"
        style="width: 360px; "
      />
      <button nz-button nzType="primary" nzSearch>
        <i nz-icon type="search"></i>
      </button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <ul
        nz-menu
        [nzTheme]="'light'"
        [nzMode]="'horizontal'"
        style="line-height: 64px; float: right; "
      >
        <li nz-menu-item (click)="clickHome()">
          <i
            nz-icon
            [type]="'home'"
            [theme]="'twotone'"
            style="font-size: 24px;"
          ></i>
          Home
        </li>
        <li nz-menu-item>
          <i
            nz-icon
            [type]="'setting'"
            [theme]="'twotone'"
            style="font-size: 24px;"
          ></i>
          Settings
        </li>
        <li nz-menu-item>
          <i
            nz-icon
            [type]="'logout'"
            [theme]="'outline'"
            style="font-size: 24px;"
          ></i>
          Logout
        </li>
      </ul>
    </div>
  </nz-header>
  `,
  styleUrls: ['./header-component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public clickHome() {
    this.router.navigate(['/home/list']);
  }
}
