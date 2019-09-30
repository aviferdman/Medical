import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-short-text',
  templateUrl: './short-text.component.html',
  styleUrls: ['./short-text.component.css']
})
export class ShortTextComponent implements OnInit {
  @Input()
  question: string;

  text: string;

  constructor() { }

  ngOnInit() {
  }

}
