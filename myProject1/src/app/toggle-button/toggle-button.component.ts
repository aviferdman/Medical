import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.css']
})
export class ToggleButtonComponent implements OnInit {
  @Output() changedEmit = new EventEmitter<boolean>();

  isChanged = false;
  constructor() { }

  ngOnInit() {
  }

  Changed() {
    this.isChanged = !this.isChanged;
    this.changedEmit.emit(this.isChanged);
  }

}
