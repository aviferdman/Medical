import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {QuestionAndAnswer} from '../service1.service';

@Component({
  selector: 'app-qs-list',
  templateUrl: './qs-list.component.html',
  styleUrls: ['./qs-list.component.css']
})
export class QsListComponent implements OnInit {
  @Input()
  questions: any;
  @Input()
  count: number;

  @Output()
  qsAndAnswersFromSectionEmit = new EventEmitter <any> ();

  allQuestionsAndAnswers = [];

  constructor() { }

  ngOnInit() {
    try {
      this.questions.map(q => this.allQuestionsAndAnswers.push(new QuestionAndAnswer(q.Question, '')));
    } catch (e) {
      console.log('couldnt load all questions' + e.toString());
    }
  }

  DoThisWhenInput(input: QuestionAndAnswer) {
    this.allQuestionsAndAnswers.map(qAndA => { if (qAndA.question === input.question) {
      qAndA.answer = input.answer; }
    });
    this.qsAndAnswersFromSectionEmit.emit(this.allQuestionsAndAnswers);
  }
}
