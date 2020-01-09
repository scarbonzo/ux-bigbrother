import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';
import { CallsService } from '../calls.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  program = null;
  events = null;
  calls = null;
  start = new Date(new Date().getUTCFullYear(), new Date().getUTCMonth(), new Date().getUTCDate());
  end = new Date(new Date().getUTCFullYear(), new Date().getUTCMonth(), new Date().getUTCDate(), 23, 59, 59);

  constructor(private eventsService: EventsService, private callsservice: CallsService) { }

  ngOnInit() {
  }

  update() {

  }

  changeEvent(event) {
    this.update();
    console.log(event.value);
  }
}
