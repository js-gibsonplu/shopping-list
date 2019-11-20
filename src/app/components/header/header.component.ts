import { Component, OnInit, Output, Input, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() featureActive = new EventEmitter<string>();

  collapsed = true;
  constructor() {}

  @ViewChild('testButton', { static: true }) testButton: ElementRef;

  ngOnInit() {}

  onActivateFeature(choice: string) {
    this.featureActive.emit(choice);
  }
}
