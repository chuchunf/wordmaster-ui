import { Component} from '@angular/core';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'PROJECT-NAME';

  dataSet = [{'word': 'abcd', 'sample': 'this is a sample sentence.', 'meaning': 'means abcde'}
    , {'word': 'defg', 'sample': 'another sample sentence.', 'meaning': 'means defgh'}];
}
