import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {QuestionAndAnswer} from '../service1.service';
import {getQuestionByQuestion} from '../../Questions';

@Component({
  selector: 'app-short-text',
  templateUrl: './short-text.component.html',
  styleUrls: ['./short-text.component.css']
})
export class ShortTextComponent implements OnInit {
  @Input()
  question: string;
  @Input()
  tabs: number;

  @Output()
  textEmiter: EventEmitter <QuestionAndAnswer> = new EventEmitter();
  keyUp: string;
  qAndA: QuestionAndAnswer;
  isHidden: boolean;

  constructor() { }

  ngOnInit() {
    this.qAndA = new QuestionAndAnswer(this.question, '');
    this.isHidden = (getQuestionByQuestion(this.question)).Is_Related === 'true';
  }

  enteredText(input: any) {
    console.log(this.keyUp);
    this.qAndA.answer = input.target.value;
    this.textEmiter.emit(this.qAndA);
  }

}
