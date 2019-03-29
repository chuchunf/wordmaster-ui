import { Component} from '@angular/core';

@Component({
    selector: 'app-main-worddetail',
    templateUrl: './worddetail-component.html',
    styleUrls: ['./worddetail-component.scss']
})
export class WordDetailComponent {
    data = [
        'Racing car sprays burning fuel into crowd.',
        'Japanese princess to wed commoner.',
        'Australian walks 100km after outback crash.',
        'Man charged over missing wedding girl.',
        'Los Angeles battles huge wildfires.'
    ];
}
