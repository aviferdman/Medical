import {Component, Input, OnInit} from '@angular/core';
import {Patient} from '../../service1.service';
import {any} from 'codelyzer/util/function';
import {findQuesForSec, findSections, QUESTIONS} from '../../../Questions';

@Component({
  selector: 'app-diagnosis',
  templateUrl: './diagnosis.component.html',
  styleUrls: ['./diagnosis.component.css']
})
export class DiagnosisComponent implements OnInit {
  patient = new Patient('', '', '', 0);
  diagnosis = '';
  sections = [];
  quesForSec = [];

  constructor() { }

  ngOnInit() {
    this.patient = history.state.queryParams.Patient;
    this.diagnosis = history.state.queryParams.string;
    this.sections = findSections(this.diagnosis);
    try {
      this.sections.map(sec => this.quesForSec.push(findQuesForSec(this.diagnosis, sec)));
    } catch (e) {
      console.log('couldnt load quesForSec' + e.toString());
    }
  }
}
