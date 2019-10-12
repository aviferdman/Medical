import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {QuestionAndAnswer} from '../service1.service';

@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.css']
})
export class ToggleButtonComponent implements OnInit {
  @Input()
  question: string;
  @Input()
  count: number;
  @Input()
  tabs: number;
  @Output()
  changedEmit = new EventEmitter<QuestionAndAnswer>();
  qAndA: QuestionAndAnswer;
  isChanged = false;

  listOfQAA = [];
  relatedQS = [];
  display = 'none';

  constructor() { }

  ngOnInit() {
    this.qAndA = new QuestionAndAnswer(this.question, '');
    // this.relatedQS = findListOfRelatedQs(this.question);
  }

  Changed() {
    this.isChanged = !this.isChanged;
    if (this.isChanged) {
      this.qAndA.answer = 'כן';
      this.display = 'block';
    } else {
      this.qAndA.answer = 'ללא';
      this.display = 'none';
    }
    this.changedEmit.emit(this.qAndA);
  }

  Merge(listOfQuestionsAndAnswers: any) {
   /* this.listOfQAA = listOfQuestionsAndAnswers;
    this.listOfQAA.push(this.qAndA);
    this.qAndA = new QuestionAndAnswer('', '');
    this.listOfQAA.map(q => {
      if (q.answer !== null && q.answer !== '') {
        this.qAndA.answer = this.qAndA.answer + q.answer + '\n';
        this.qAndA.question = this.qAndA.question + q.question + '\n';
      }
    });
    this.listOfQAA = [];
    this.changedEmit.emit(this.qAndA);
   *\
    */
   listOfQuestionsAndAnswers.push(this.qAndA);
  }
}
