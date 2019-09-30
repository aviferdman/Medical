import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PatientsComponent } from './components/patients/patients.component';
import {FormsModule} from '@angular/forms';
import { FindPatientComponent } from './components/find-patient/find-patient.component';
import { AppRoutingModule } from './app-routing.module';
import { CatagoryComponent } from './components/catagory/catagory.component';
import { GroupCardComponent } from './components/group-card/group-card.component';
import { KindCardComponent } from './components/kind-card/kind-card.component';
import { DiagnosisComponent } from './components/diagnosis/diagnosis.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ShortTextComponent } from './short-text/short-text.component';
import { DropboxComponent } from './dropbox/dropbox.component';
import { LongTextComponent } from './long-text/long-text.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientsComponent,
    FindPatientComponent,
    CatagoryComponent,
    GroupCardComponent,
    KindCardComponent,
    DiagnosisComponent,
    CheckboxComponent,
    ShortTextComponent,
    DropboxComponent,
    LongTextComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
