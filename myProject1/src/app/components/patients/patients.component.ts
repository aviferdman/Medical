import { Component, OnInit } from '@angular/core';
import {from} from 'rxjs';
import {Form} from '@angular/forms';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})

export class PatientsComponent implements OnInit {

  id: string;
  public title;
  public durantion;
  public description;
  public Slevel;
  constructor(
    ) {
  }

  ngOnInit() {
    this.title = '';
    this.durantion = 0;
    this.description = '';
    this.Slevel = 1;
  }

  set level(newLevel: string) {
    console.log('setting lesson level...');
    if (newLevel.localeCompare('BEGINNER')) {
      this.Slevel = 1;
    } else {
      this.Slevel = 2;
    }
  }

  get level() {
    if (this.Slevel === 1) {
      return 'BEGINNER';
    } else {
      return 'ADVANCED';
    }
  }
}
