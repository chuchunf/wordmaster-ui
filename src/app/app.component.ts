import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PROJECT-NAME';
  dataSet = [{'word': 'abcd', 'sample': 'this is a sample sentence.', 'meaning': 'means abcde'}
    , {'word': 'defg', 'sample': 'another sample sentence.', 'meaning': 'means defgh'}];
}
