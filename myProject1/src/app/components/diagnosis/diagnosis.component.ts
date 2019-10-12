import {Component, Input, OnInit} from '@angular/core';
import {Patient, QuestionAndAnswer} from '../../service1.service';
import {any} from 'codelyzer/util/function';
import {findQuesForSec, findSections, QUESTIONS} from '../../../Questions';
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
  allQuestionsAndAnswers = [[]];


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
    }/*
    try {
      this.quesForSec.map(sec => sec.map(q => this.allQuestionsAndAnswers.push(new QuestionAndAnswer(q.Question, ''))));
    } catch (e) {
      console.log('couldnt load all questions' + e.toString());
    }*/
    this.allQuestionsAndAnswers = new Array(this.sections.length);
  }
}
