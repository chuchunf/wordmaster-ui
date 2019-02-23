import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <p>
      header-component works!
    </p>
  `,
  styleUrls: ['./header-component.component.scss']
})
export class HeaderComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
