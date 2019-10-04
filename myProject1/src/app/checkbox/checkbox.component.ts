import {Component, Output, Input, OnInit, EventEmitter } from '@angular/core';
import {QuestionAndAnswer} from '../service1.service';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {
  @Input()
  question: string;
  @Output() isTrueEmit: EventEmitter<QuestionAndAnswer> = new EventEmitter();

  isTrue = false;
  qAndA: QuestionAndAnswer;

  constructor() { }

  ngOnInit() {
    this.qAndA = new QuestionAndAnswer(this.question, '');
  }

  onClicked() {
    this.isTrue = !this.isTrue;
    if (this.isTrue) {
      this.qAndA.answer = 'כן';
    } else {
      this.qAndA.answer = 'ללא';
    }
    this.isTrueEmit.emit(this.qAndA);
  }

  changeTheValue($event: boolean) {
    this.isTrue = !this.isTrue;
    if (this.isTrue) {
      this.qAndA.answer = 'כן';
    } else {
      this.qAndA.answer = 'ללא';
    }
    this.isTrueEmit.emit(this.qAndA);
  }
}
