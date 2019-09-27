import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FindPatientComponent } from './components/find-patient/find-patient.component';
import { PatientsComponent } from './components/patients/patients.component';
import { CatagoryComponent } from './components/catagory/catagory.component';
import {DiagnosisComponent} from './components/diagnosis/diagnosis.component';

const routes: Routes = [
  {path: 'home', component: FindPatientComponent},
  {path: 'catagory', component: CatagoryComponent},
  {path: 'diagnosis', component: DiagnosisComponent},
  { path: '**', redirectTo: 'home' },
  ];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
