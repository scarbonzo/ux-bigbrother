import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  events = null;
  displayedColumns: string[] = ['timestamp', 'machine', 'username', 'eventType', 'gw', 'dc'];

  search = '';
  start = new Date(new Date().getUTCFullYear(), new Date().getUTCMonth(), new Date().getUTCDate());
  end = new Date(new Date().getUTCFullYear(), new Date().getUTCMonth(), new Date().getUTCDate(), 23, 59, 59);
  take = 10000;
  skip = 0;

  constructor(private eventsService: EventsService) { }

  ngOnInit() {
    this.update();
  }

  update() {
    this.eventsService
      .getBasicEvents(
        this.start, this.end,
        this.search,
        this.take, this.skip)
        .subscribe(data => { this.events = data;
    });
  }

  changeEvent(event) {
    this.update();
    console.log(event.value);
  }

}
