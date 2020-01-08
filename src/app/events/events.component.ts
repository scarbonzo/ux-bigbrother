import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';
import { ActivatedRoute } from '@angular/router';

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

  private sub: any;

  constructor(private eventsService: EventsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(
      params => {
        const uname = params.username;
        if (uname) {
          this.search = uname;
        }
      });
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
