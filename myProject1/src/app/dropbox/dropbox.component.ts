import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {QuestionAndAnswer} from '../service1.service';

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
  selectOption: string;

  constructor() { }

  ngOnInit() {
    this.qAndA = new QuestionAndAnswer(this.question, '');
  }

  clickOnOption(event: any) {
    console.log(this.selectOption)
    this.qAndA.answer = this.selectOption;
    this.selectEmiter.emit(this.qAndA);
  }
}
