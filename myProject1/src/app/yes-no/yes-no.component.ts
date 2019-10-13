import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {QuestionAndAnswer} from '../service1.service';
import {getQuestionByQuestion} from '../../Questions';

@Component({
  selector: 'app-yes-no',
  templateUrl: './yes-no.component.html',
  styleUrls: ['./yes-no.component.css']
})
export class YesNoComponent implements OnInit {
  @Input()
  question: string;
  @Input()
  tabs: number;
  @Output()
  changedEmit = new EventEmitter<QuestionAndAnswer>();
  isHidden: boolean;
  @Input()
  relatedQs: [];
  @Output()
  relatedEmitter2 = new EventEmitter<[]>();

  constructor() { }

  ngOnInit() {
    this.isHidden = (getQuestionByQuestion(this.question)).Is_Related === 'true';
  }

  Do($event: QuestionAndAnswer) {
    this.changedEmit.emit($event);
  }

  DoWithRelatedArray($event: []) {
    this.relatedEmitter2.emit($event);
  }
}
