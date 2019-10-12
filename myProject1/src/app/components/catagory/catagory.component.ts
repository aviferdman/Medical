import {Component, Input, OnInit} from '@angular/core';
import {Group, Patient} from '../../service1.service';
import {GROUPS} from '../../../Group';
import {any} from 'codelyzer/util/function';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';

@Component({
  selector: 'app-catagory',
  templateUrl: './catagory.component.html',
  styleUrls: ['./catagory.component.css']
})
export class CatagoryComponent implements OnInit {

  patient = new Patient('', '', '', 0);
  groups = {};

  constructor(private router: Router) { }

  ngOnInit() {
    this.patient = history.state.data;
    this.groups = GROUPS;
  }

  backPage() {
    this.router.navigate(['/home']);
  }
  showIdentity() {
    Swal.fire({
      title: 'Patient information:',
      html: `<p> ID: ${this.patient.ID} First Name: ${this.patient.firstName} Last Name: ${this.patient.lastName} Age: ${this.patient.age} </p>`,
      showConfirmButton: true,
    });
  }
}
