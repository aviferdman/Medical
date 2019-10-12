import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {QuestionAndAnswer} from '../service1.service';

@Component({
  selector: 'app-yes-no-radio',
  templateUrl: './yes-no-radio.component.html',
  styleUrls: ['./yes-no-radio.component.css']
})
export class YesNoRadioComponent implements OnInit {
  isChanged: boolean;
  @Input()
  question: string;
  @Input()
  tabs: number;
  @Output()
  changedEmitter = new EventEmitter<QuestionAndAnswer>();
  qAndA: QuestionAndAnswer;

  constructor() { }

  ngOnInit() {
    this.qAndA = new QuestionAndAnswer(this.question, '');
    this.isChanged = false;
  }
  ChangedYes() {
    this.qAndA.answer = 'כן';
    this.changedEmitter.emit(this.qAndA);
  }

  ChangedNo() {
    this.qAndA.answer = 'ללא';
    this.changedEmitter.emit(this.qAndA);
  }
}
