import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule, MatButtonModule,
  MatFormFieldModule, MatInputModule, MatProgressSpinnerModule,
  MatSelectModule,
  MatStepperModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import { UserComponent } from './user/user.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { UploadComponent } from './upload/upload.component';
import { SelectUserComponent } from './select-user/select-user.component';
import { UploadNotesComponent } from './upload-notes/upload-notes.component';
import { UploadRecordingComponent } from './upload-recording/upload-recording.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ResultComponent } from './result/result.component';
import { UserResultComponent } from './user-result/user-result.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { ProcessingComponent } from './processing/processing.component';
import { ProcessingNoteComponent } from './processing-note/processing-note.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UploadComponent,
    SelectUserComponent,
    UploadNotesComponent,
    UploadRecordingComponent,
    ResultComponent,
    UserResultComponent,
    AnalysisComponent,
    ProcessingComponent,
    ProcessingNoteComponent
  ],
  imports: [
    MatProgressSpinnerModule,
    MatTabsModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatSelectModule,
    FlexLayoutModule,
    BrowserModule,
    AppRoutingModule,
    MatStepperModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
