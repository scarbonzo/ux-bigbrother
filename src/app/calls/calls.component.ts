import { Component, OnInit } from '@angular/core';
import { CallsService } from '../calls.service';

@Component({
  selector: 'app-calls',
  templateUrl: './calls.component.html',
  styleUrls: ['./calls.component.scss']
})
export class CallsComponent implements OnInit {
  calls: any;
  start = new Date(new Date().getUTCFullYear(), new Date().getUTCMonth(), new Date().getUTCDate());
  end = new Date(new Date().getUTCFullYear(), new Date().getUTCMonth(), new Date().getUTCDate(), 23, 59, 59);
  take = 50;
  skip = 0;
  number = '';
  device = '';
  code = '';

  constructor(private callsservice: CallsService) { }

  ngOnInit() {
    this.update();
  }

  update() {
    this.callsservice
    .getCalls(
      this.start, this.end,
      this.number, this.device, this.code,
      this.take, this.skip)
      .subscribe(data => { this.calls = data;
      });
  }

  changeEvent(event) {
    this.update();
    console.log(event.value);
  }
}
