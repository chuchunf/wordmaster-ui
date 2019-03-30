import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-worddetail',
  templateUrl: './worddetail-component.html',
  styleUrls: ['./worddetail-component.scss']
})
export class WordDetailComponent {
  data = [
    "Racing car sprays burning fuel into crowd.",
    "Japanese princess to wed commoner.",
    "Australian walks 100km after outback crash.",
    "Man charged over missing wedding girl.",
    "Los Angeles battles huge wildfires."
  ];

  constructor(private router: Router) {}

  public clickClose() {
    this.router.navigate(['/home/list']);
  }

  public clickSpeak() {
    if (window.speechSynthesis) {
      const msg = new SpeechSynthesisUtterance();
      msg.rate = 0.6;
      msg.text = 'module';
      speechSynthesis.speak(msg);
    }
  }
}
