import {Component, Input, OnInit} from '@angular/core';
import {Patient, QuestionAndAnswer, updateRelatedPosition} from '../../service1.service';
import {any} from 'codelyzer/util/function';
import {findQuesForSec, findSections, getQuestionByQuestion, getRelatedQuestionsByQuestion, QUESTIONS} from '../../../Questions';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';

@Component({
  selector: 'app-diagnosis',
  templateUrl: './diagnosis.component.html',
  styleUrls: ['./diagnosis.component.css']
})
export class DiagnosisComponent implements OnInit {
  patient = history.state.queryParams.Patient;
  diagnosis = history.state.queryParams.string;

  sections = [];
  quesForSec = [];
  allQuestionsAndAnswers = [];


  constructor(private router: Router) {
  }


  DoThisWhenInput(input: [], i: number) {
    this.allQuestionsAndAnswers[i] = input;
  }

  ngOnInit() {
    this.sections = findSections(this.diagnosis);
    try {
      this.sections.map(sec => this.quesForSec.push(findQuesForSec(this.diagnosis, sec)));
    } catch (e) {
      console.log('couldnt load quesForSec' + e.toString());
    }
    this.allQuestionsAndAnswers = new Array(this.sections.length);
  }
}
