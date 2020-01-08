import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-callsresults',
  templateUrl: './callsresults.component.html',
  styleUrls: ['./callsresults.component.scss']
})
export class CallsresultsComponent {
  private calls: null;
  displayedColumns: string[] = [
    'dateTimeConnect',
    'dateTimeDisconnect',
    'duration',
    'callingPartyNumber',
    'origDeviceName',
    'origCauseValue',
    'originalCalledPartyNumber',
    'finalCalledPartyNumber',
    'destDeviceName',
    'destCauseValue',
  ];

  @Input() set callsList(value: any) {
    this.calls = value;
  }
  get callsList(): any {
    return this.calls;
  }

  constructor() { }

}
