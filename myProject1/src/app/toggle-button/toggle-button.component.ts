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
  @Output()
  changedEmit = new EventEmitter<QuestionAndAnswer>();

  isChanged = false;
  qAndA: QuestionAndAnswer;

  constructor() { }

  ngOnInit() {
    this.qAndA = new QuestionAndAnswer(this.question, '');
  }

  Changed() {
    this.isChanged = !this.isChanged;
    if (this.isChanged) {
      this.qAndA.answer = 'כן';
    } else {
      this.qAndA.answer = 'ללא';
    }
    this.changedEmit.emit(this.qAndA);
  }
}
