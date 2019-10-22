import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<any>();
  collapsed = true;
  constructor() {}

  ngOnInit() {}

  onAddServer(data) {
    this.serverCreated.emit();
    console.log(`this is from header: ${data}`);
  }
}
