import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {QuestionAndAnswer} from '../service1.service';
import {getQuestionByQuestion, getRelatedQuestionsByQuestion} from '../../Questions';

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
  @Output()
  RelatedEmitter = new EventEmitter<[]>();
  qAndA: QuestionAndAnswer;

  constructor() { }

  ngOnInit() {
    this.qAndA = new QuestionAndAnswer(this.question, '');
    this.isChanged = false;
  }
  ChangedYes() {
    this.qAndA.answer = 'כן';
    this.changedEmitter.emit(this.qAndA);
    this.RelatedEmitter.emit(getQuestionByQuestion(this.question).Related_QS);
  }

  ChangedNo() {
    this.qAndA.answer = 'ללא';
    this.changedEmitter.emit(this.qAndA);
    this.RelatedEmitter.emit(getQuestionByQuestion(this.question).Related_QS);
  }
}
