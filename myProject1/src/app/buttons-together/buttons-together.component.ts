import {Component, Input, OnInit} from '@angular/core';
import {Patient} from '../service1.service';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';

@Component({
  selector: 'app-buttons-together',
  templateUrl: './buttons-together.component.html',
  styleUrls: ['./buttons-together.component.css']
})
export class ButtonsTogetherComponent implements OnInit {
  @Input()
  patient: Patient;
  @Input()
  finalSummary: any;
  display = [];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  showSummary() {
    this.display = new Array();
    this.finalSummary.map (sec => {if (sec !== null) {
      sec.map(q => {if (q !== null && q.answer !== '') {
        this.display.push(q);
      }});
    }});
    Swal.fire({
      title: 'Summary information:',
      html: this.display.map(qAndA => `<p>${qAndA.question} ${qAndA.answer}</p>`).join(''),
      showCancelButton: true,
      showConfirmButton: true
    });
  }

  backPage() {
    this.router.navigate(['/catagory'], {state: {data: this.patient}});
  }

}
