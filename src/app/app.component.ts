import { Component, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('topLearners') topLearners;
  @ViewChild('progress') progress;

  title = 'PROJECT-NAME';
  dataSet = [{'word': 'abcd', 'sample': 'this is a sample sentence.', 'meaning': 'means abcde'}
    , {'word': 'defg', 'sample': 'another sample sentence.', 'meaning': 'means defgh'}];
  values: number[] = [102, 115, 130, 137];

sampleData2: any[] = [
  {user: 'Baba', count: 2000},
  {user: 'Yoyo', count: 3012}
];
xAxis2: any = {
  dataField: 'user',
  showGridLines: true,
};
seriesGroups2: any[] = [
  {
    type: 'column',
    orientation: 'horizontal',
    valueAxis:
            {
                minValue: 1500,
                maxValue: 3500,
                displayValueAxis: true,
                flip: true,
                description: '',
                axisSize: 'auto',
                tickMarksColor: '#888888'
            },
    series: [
      { dataField: 'count', displayText: 'count' },
    ]
  }
];
  sampleData: any[] = [
    { Day: 'Monday', Keith: 30 },
    { Day: 'Tuesday', Keith: 25},
    { Day: 'Wednesday', Keith: 30},
    { Day: 'Thursday', Keith: 35},
    { Day: 'Friday', Keith: 20},
    { Day: 'Saturday', Keith: 30},
    { Day: 'Sunday', Keith: 60}
  ];
  padding: any = { left: 0, top: 0, right: 0, bottom: 0 };
  titlePadding: any = { left: 0, top: 0, right: 0, bottom: 0 };
    xAxis: any =
    {
        dataField: 'Day',
        showGridLines: true
    };
    seriesGroups: any[] =
    [
        {
            type: 'column',
            columnsGapPercent: 50,
            seriesGapPercent: 0,
            valueAxis:
            {
                unitInterval: 10,
                minValue: 10,
                maxValue: 70,
                displayValueAxis: true,
                description: '',
                axisSize: 'auto',
                tickMarksColor: '#888888'
            },
            series: [
                { dataField: 'Keith', displayText: 'Keith' },
            ]
        }
    ];

  ngAfterViewInit(): void {
      this.topLearners.refresh();
      this.progress.refresh();
  }
}
