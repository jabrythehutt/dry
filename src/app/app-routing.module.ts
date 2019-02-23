import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UploadComponent} from './upload/upload.component';
import {ResultComponent} from './result/result.component';
import {ProcessingComponent} from './processing/processing.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'upload',
    pathMatch: 'full'
  },
  {
    path: 'upload',
    component: UploadComponent
  },
  {
    path: 'result/:userId',
    component: ResultComponent
  },
  {
    path: 'processing/:noteId',
    component: ProcessingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
