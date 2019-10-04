import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {QuestionAndAnswer} from '../service1.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-dropbox',
  templateUrl: './dropbox.component.html',
  styleUrls: ['./dropbox.component.css']
})
export class DropboxComponent implements OnInit {
  @Input()
  listOfOptions: [];
  @Input()
  question: string;
  @Output()
  selectEmiter: EventEmitter <QuestionAndAnswer> = new EventEmitter();

  qAndA: QuestionAndAnswer;
  selectOption = '';

  constructor() { }

  ngOnInit() {
    this.qAndA = new QuestionAndAnswer(this.question, '');
  }

  clickOnOption() {
    console.log(this.selectOption);
    this.qAndA.answer = this.selectOption;
    this.selectEmiter.emit(this.qAndA);
  }
}
