import { Component, OnInit } from '@angular/core';
import { HdrService } from '../hdr.service';

@Component({
  selector: 'app-hdreports',
  templateUrl: './hdreports.component.html',
  styleUrls: ['./hdreports.component.scss']
})
export class HdreportsComponent implements OnInit {
  report = null;
  year = new Date().getUTCFullYear();
  month = new Date().getUTCMonth() + 1;

  constructor(private hdrservice: HdrService) { }

  ngOnInit() {
    this.update();
  }

  getReport(year: number, month: number) {
    this.hdrservice.getReport(year, month)
    .subscribe(data => { this.report = data;
    });
  }

  update() {
    this.getReport(
      this.year, this.month
    );
  }

  changeEvent(event) {
    this.update();
    console.log(event.value);
  }
}
