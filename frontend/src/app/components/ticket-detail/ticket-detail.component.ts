import { Component, OnInit, Input, SimpleChange } from "@angular/core";

@Component({
  selector: "app-ticket-detail",
  templateUrl: "./ticket-detail.component.html",
  styleUrls: ["./ticket-detail.component.css"]
})
export class TicketDetailComponent implements OnInit {
  @Input() mejor: number;
  changeLog: string[] = [];

  constructor() {}

  ngOnInit() {}


  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    let log: string[] = [];
    for (let propName in changes) {
      let changedProp = changes[propName];
      let to = JSON.stringify(changedProp.currentValue);
      if (changedProp.isFirstChange()) {
        log.push(`Initial value of ${propName} set to ${to}`);
      } else {
        let from = JSON.stringify(changedProp.previousValue);
        log.push(`${propName} changed from ${from} to ${to}`);
      }
    }
    this.changeLog.push(log.join(', '));
    console.log(this.changeLog);
  }


  @Input()
  set name(name: string) {
    console.log(name);
  }
}
