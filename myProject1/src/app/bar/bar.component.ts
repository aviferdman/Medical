import {Component, Input, OnInit} from '@angular/core';
import {Patient} from '../service1.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {
  @Input()
  patient: Patient;
  @Input()
  diagnosis: string;
  @Input()
  allQuestionsAndAnswers;

  constructor() {}

  ngOnInit() {

  }
  showIdentity() {
    Swal.fire({
      title: 'Patient information:',
      html: `<p> ID: ${this.patient.ID} First Name: ${this.patient.firstName} Last Name: ${this.patient.lastName} Age: ${this.patient.age} </p>`,
      showConfirmButton: true,
    });
  }
}
