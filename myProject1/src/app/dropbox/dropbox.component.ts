import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {QuestionAndAnswer} from '../service1.service';
import {FormControl} from '@angular/forms';
import {getQuestionByQuestion} from '../../Questions';

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
  @Input()
  tabs: number;
  @Output()
  selectEmiter: EventEmitter <QuestionAndAnswer> = new EventEmitter();
  isHidden: boolean;

  qAndA: QuestionAndAnswer;
  selectOption = '';

  constructor() { }

  ngOnInit() {
    this.qAndA = new QuestionAndAnswer(this.question, '');
    this.isHidden = (getQuestionByQuestion(this.question)).Is_Related === 'true';
  }

  clickOnOption() {
    console.log(this.selectOption);
    this.qAndA.answer = this.selectOption;
    this.selectEmiter.emit(this.qAndA);
  }
}
