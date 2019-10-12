import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PatientsComponent } from './components/patients/patients.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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
import { DiagnosisFormComponent } from './components/diagnosis-form/diagnosis-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {
  MatCardModule, MatDividerModule,
  MatIconModule, MatListModule, MatMenuModule,
  MatRadioModule,
  MatSelectModule, MatSidenavModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule, MatTooltipModule
} from '@angular/material';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { ToggleButtonComponent } from './toggle-button/toggle-button.component';
import { BarComponent } from './bar/bar.component';
import { ButtonsTogetherComponent } from './buttons-together/buttons-together.component';
import { QsListComponent } from './qs-list/qs-list.component';
import { YesNoRadioComponent } from './yes-no-radio/yes-no-radio.component';
import { YesNoComponent } from './yes-no/yes-no.component';


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
    LongTextComponent,
    DiagnosisFormComponent,
    ToggleButtonComponent,
    BarComponent,
    ButtonsTogetherComponent,
    QsListComponent,
    YesNoRadioComponent,
    YesNoComponent,
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatDividerModule,
    MatMenuModule,
    MatListModule,
    MatTooltipModule,
    MatSidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
