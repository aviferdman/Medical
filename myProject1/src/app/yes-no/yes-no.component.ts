import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {QuestionAndAnswer} from '../service1.service';

@Component({
  selector: 'app-yes-no',
  templateUrl: './yes-no.component.html',
  styleUrls: ['./yes-no.component.css']
})
export class YesNoComponent implements OnInit {
  @Input()
  question: string;
  @Input()
  tabs: number;
  @Output()
  changedEmit = new EventEmitter<QuestionAndAnswer>();

  constructor() { }

  ngOnInit() {
  }

  Do($event: QuestionAndAnswer) {
    this.changedEmit.emit($event);
  }
}
