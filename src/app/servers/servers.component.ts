import {Component, OnInit} from '@angular/core';

@Component({
  // selector: '[app-servers]', Attribute selector
  // selector: '.app-servers', Class selector
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'TestServer';
  serverCreated = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server has been created. Server Name is: ' + this.serverName;
  }

  /*----------------------------------------------------*/
  onUpdateServerName(event) {
    // 1 WAY DATA Binding
    // console.log(event);
    this.serverName = event.target.value;
  }
  /*----------------------------------------------------*/
}
