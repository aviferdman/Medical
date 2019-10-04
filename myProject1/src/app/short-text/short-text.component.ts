import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {QuestionAndAnswer} from '../service1.service';

@Component({
  selector: 'app-short-text',
  templateUrl: './short-text.component.html',
  styleUrls: ['./short-text.component.css']
})
export class ShortTextComponent implements OnInit {
  @Input()
  question: string;

  @Output()
  textEmiter: EventEmitter <QuestionAndAnswer> = new EventEmitter();
  keyUp: string;
  qAndA: QuestionAndAnswer;

  constructor() { }

  ngOnInit() {
    this.qAndA = new QuestionAndAnswer(this.question, '');
  }

  enteredText(input: any) {
    console.log(this.keyUp);
    this.qAndA.answer = input.target.value;
    this.textEmiter.emit(this.qAndA);
  }

}
