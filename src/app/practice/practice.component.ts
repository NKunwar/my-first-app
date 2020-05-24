import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['practice.component.css']
})

export class PracticeComponent implements OnInit {
  showSecret = false;
  log = [];
  onToggleDetails() {
    this.showSecret = !this.showSecret;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }

  constructor() {}
  ngOnInit(): void {}

}
