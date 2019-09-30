import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-long-text',
  templateUrl: './long-text.component.html',
  styleUrls: ['./long-text.component.css']
})
export class LongTextComponent implements OnInit {
  @Input()
  question: string;

  text: string;

  constructor() { }

  ngOnInit() {
  }

}
