import { Component, ViewChild, AfterViewInit} from '@angular/core';

@Component({
    selector: 'app-sidebar',
    template: `
      <nz-card style="width:400px;" [nzCover]="coverTemplate" [nzActions]="[used,learned,mastered]">
        <nz-card-meta nzTitle="BaBa" [nzDescription]="badges" [nzAvatar]="avatarTemplate"></nz-card-meta>
      </nz-card>
      <ng-template #avatarTemplate>
        <nz-avatar [nzSize]="64" nzSrc="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"></nz-avatar>
      </ng-template>
      <ng-template #badges>
        <nz-avatar nzIcon="user"></nz-avatar>
        <nz-avatar nzText="U"></nz-avatar>
        <nz-avatar nzText="USER"></nz-avatar>
      </ng-template>
      <ng-template #used>
        <i nz-icon [type]="'question-circle'" [theme]="'twotone'" style="font-size: 24px;" ></i> 1000
      </ng-template>
      <ng-template #learned>
        <i nz-icon [type]="'clock-circle'" [theme]="'twotone'" style="font-size: 24px;" ></i> 2000
      </ng-template>
      <ng-template #mastered>
        <i nz-icon [type]="'check-circle'" [theme]="'twotone'" style="font-size: 24px;" ></i> 3000
      </ng-template>
      <nz-card style="width:400px;">
        <jqxChart #progress
        [width]="350" [height]="250"
        [title]="'Progress'"
        [description]="''"
        [showLegend]="false" [enableAnimations]="false" [padding]="padding" [showBorderLine]="false" 
        [titlePadding]="titlePadding" [source]="sampleData" [xAxis]="xAxis"
        [seriesGroups]="seriesGroups" [colorScheme]="'scheme01'">
        </jqxChart>
      </nz-card>
      <nz-card style="width:400px;">
        <jqxChart #topLearners
        [width]="350" [height]="250"
        [title]="'Top Learners'"
        [description]="''"
        [showLegend]="false" [enableAnimations]="false" [padding]="padding" [showBorderLine]="false" 
        [titlePadding]="titlePadding" [source]="sampleData2" [xAxis]="xAxis2"
        [seriesGroups]="seriesGroups2" [colorScheme]="'scheme01'">
        </jqxChart>
      </nz-card>
    `,
    styleUrls: ['./sidebar-component.scss'],
})
export class SidebarComponent implements AfterViewInit {
  @ViewChild('topLearners') topLearners;
  @ViewChild('progress') progress;

  title = 'PROJECT-NAME';
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

    constructor() {}

    ngAfterViewInit(): void {
      this.topLearners.refresh();
      this.progress.refresh();
    }
}
