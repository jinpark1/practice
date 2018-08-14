import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // template: `<app-server></app-server><app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'TestServer';
  userName = '';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];
  password = '';
  log = ['abc'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
   }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created!';
    this.password = 'Tuna!'
    this.log.push(new Date())
  }

  onUpdateServerName(event: Event) {
    console.log(event)
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onEmptyUser() {
    this.userName = '';
  }



}
