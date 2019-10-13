import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {QuestionAndAnswer} from '../service1.service';
import {getQuestionByQuestion} from '../../Questions';

@Component({
  selector: 'app-long-text',
  templateUrl: './long-text.component.html',
  styleUrls: ['./long-text.component.css']
})
export class LongTextComponent implements OnInit {
  @Input()
  question: string;
  @Input()
  tabs: number;
  @Output()
  textEmiter: EventEmitter <QuestionAndAnswer> = new EventEmitter();
  text: string;
  qAndA: QuestionAndAnswer;
  isHidden: boolean;

  constructor() { }

  ngOnInit() {
    this.qAndA = new QuestionAndAnswer(this.question, '');
    this.isHidden = (getQuestionByQuestion(this.question)).Is_Related === 'true';
  }

  enteredText(input: any) {
    this.qAndA.answer = input.target.value;
    this.textEmiter.emit(this.qAndA);
  }
}
