import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-dropbox',
  templateUrl: './dropbox.component.html',
  styleUrls: ['./dropbox.component.css']
})
export class DropboxComponent implements OnInit {
  @Input()
  listOfOptions: [];
  chosenOption: string;

  constructor() { }

  ngOnInit() {
  }

  clickOnOption(option: string) {
    this.chosenOption = option;
  }
}
