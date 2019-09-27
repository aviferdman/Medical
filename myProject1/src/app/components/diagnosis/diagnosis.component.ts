import {Component, Input, OnInit} from '@angular/core';
import {Patient} from '../../service1.service';

@Component({
  selector: 'app-diagnosis',
  templateUrl: './diagnosis.component.html',
  styleUrls: ['./diagnosis.component.css']
})
export class DiagnosisComponent implements OnInit {

  patient = new Patient('wer', '', '', 0);
  diagnosis = 'qwr';

  constructor() { }

  ngOnInit() {
    this.patient = history.state.data;
    this.diagnosis = history.state.data;
  }

}
