import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-eventsresults',
  templateUrl: './eventsresults.component.html',
  styleUrls: ['./eventsresults.component.scss']
})
export class EventsresultsComponent {
  private events: Event[];
  displayedColumns: string[] = ['timestamp', 'machine', 'username', 'eventType', 'gw', 'dc'];

  @Input() set eventList(value: Event[]) {
    this.events = value;
  }
  get eventList(): Event[] {
    return this.events;
  }
}
