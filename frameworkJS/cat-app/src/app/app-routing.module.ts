import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormDivComponent } from './form-div/form-div.component';
import { MainDivComponent } from './main-div/main-div.component';

const routes: Routes = [
  {
    path : 'landing',
    component : MainDivComponent
  },
  {
    path : 'form',
    component : FormDivComponent
  },
  {
    path : '**',
    redirectTo : 'landing'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
