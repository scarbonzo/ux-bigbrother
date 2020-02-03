import { Component, OnInit } from '@angular/core';
import { HdrService } from '../hdr.service';

@Component({
  selector: 'app-hdreports',
  templateUrl: './hdreports.component.html',
  styleUrls: ['./hdreports.component.scss']
})
export class HdreportsComponent implements OnInit {
  report = null;
  start = new Date();
  end = new Date();

  constructor(private hdrservice: HdrService) { }

  ngOnInit() {
    this.update();
  }

  getReport(start: Date, end: Date) {
    this.hdrservice.getReport(start, end)
    .subscribe(data => { this.report = data;
    });
  }

  update() {
    this.getReport(
      this.start, this.end
    );
  }

  changeEvent(event) {
    this.update();
    console.log(event.value);
  }
}
