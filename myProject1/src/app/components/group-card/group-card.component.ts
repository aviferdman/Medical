import {Component, Input, OnInit} from '@angular/core';
import {Group, Patient} from '../../service1.service';
import {ACUTE} from '../../../Acute';
import {CHRONIC} from '../../../Chronic';
import {EXLAB} from '../../../ExLab';
import {OTHER} from '../../../Other';

@Component({
  selector: 'app-group-card',
  templateUrl: './group-card.component.html',
  styleUrls: ['./group-card.component.css']
})
export class GroupCardComponent implements OnInit {
  @Input()
  groupInput: Group;

  @Input()
  patient: Patient;

  kindOfComplaint: {};

  constructor() { }

  ngOnInit() {
    if (this.groupInput.type === 'אקוטי') {
      this.kindOfComplaint = ACUTE;
    }
    if (this.groupInput.type === 'כרוני') {
      this.kindOfComplaint = CHRONIC;
    }
    if (this.groupInput.type === 'מעבדה חריגה') {
      this.kindOfComplaint = EXLAB; // not yet implemented
    }
    if (this.groupInput.type === 'אחר') {
      this.kindOfComplaint = OTHER; // not yet implemented
    }
  }

}
