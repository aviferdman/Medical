import { Component, OnInit } from '@angular/core';
import {findPatientById, PATIENTS} from '../../../Patients';
import {PatientsComponent} from '../patients/patients.component';
import {Router} from '@angular/router';
import {Patient, Service1Service} from '../../service1.service';



@Component({
  selector: 'app-find-patient',
  templateUrl: './find-patient.component.html',
  styleUrls: ['./find-patient.component.css']
})
export class FindPatientComponent implements OnInit {
  ID;
  patient: Patient;
  service1: Service1Service;
  constructor(private router: Router) {
  }

  ngOnInit() {
    this.ID = '';
    this.patient = new Patient('', '', '', 0);
  }
  FindPatientByID() {
    this.patient = new Patient(findPatientById(this.ID).id,
      findPatientById(this.ID).FirstName,
      findPatientById(this.ID).LastName,
      findPatientById(this.ID).Age);
    this.router.navigate(['/catagory'], {state: {data: this.patient}});
  }
}
