import {Component, Input, OnInit} from '@angular/core';
import {Group, Patient} from '../../service1.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-kind-card',
  templateUrl: './kind-card.component.html',
  styleUrls: ['./kind-card.component.css']
})
export class KindCardComponent implements OnInit {
  @Input()
  name: string;

  @Input()
  patient: Patient;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  ClickOnDiagnosis() {
    this.router.navigate(['/diagnosis'], {state: {queryParams: {Patient: this.patient, string: this.name}, queryParamsHandling: 'merge'}});
  }
}
