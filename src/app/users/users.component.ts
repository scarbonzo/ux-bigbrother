import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';
import { CallsService } from '../calls.service';
import { UsersService } from '../users.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users = null;
  selectedUser = null;
  selectedUsername = null;
  selectedExtension = null;
  events = null;
  calls = null;
  start = new Date(new Date().getUTCFullYear(), new Date().getUTCMonth(), new Date().getUTCDate());
  end = new Date(new Date().getUTCFullYear(), new Date().getUTCMonth(), new Date().getUTCDate(), 23, 59, 59);

  constructor(private usersService: UsersService, private eventsService: EventsService, private callsservice: CallsService) { }

  ngOnInit() {
    console.log(this.selectedUser);
    this.getUsers();
  }

  getUsers() {
    this.usersService.getAllUsers()
    .subscribe(data => { this.users = data;
    });
  }

  selectUser() {
    // console.log(this.selectedUser);
    this.selectedUsername = this.selectedUser.username;
    this.selectedExtension = this.selectedUser.extension;
    this.update();
  }

  update() {
    this.eventsService
    .getBasicEvents(
      this.start, this.end,
      this.selectedUsername,
      100000, 0)
      .subscribe(data => { this.events = data;
    });

    if (this.selectedExtension) {
      this.callsservice
        .getCalls(
          this.start, this.end,
          this.selectedExtension, '', '',
          100000, 0)
          .subscribe(data => { this.calls = data;
      });
    }
  }

  changeEvent(event) {
    this.update();
    console.log(event.value);
  }
}
