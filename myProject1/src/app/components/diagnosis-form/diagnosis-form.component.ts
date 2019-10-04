import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

// CommonJS


@Component({
  selector: 'app-diagnosis-form',
  templateUrl: './diagnosis-form.component.html',
  styleUrls: ['./diagnosis-form.component.css']
})
export class DiagnosisFormComponent implements OnInit {

  questions: string[] = ['חום', 'כאב גרון'];
  texts: string[] = ['ריאות', 'לוע'];
  myJson: any;

  constructor() { }

  ngOnInit() {


  }

  onClick() {
    Swal.fire({
      title: 'Summary information:',
      html: this.questions.map(c => `<p>${c} True</p>`).join(''),
      footer: '<a href>Why do I have this issue?</a>',
      showCancelButton: true
    });
  }


}
