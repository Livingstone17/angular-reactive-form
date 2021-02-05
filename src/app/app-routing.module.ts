import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { Form2Component } from './form2/form2.component';

const routes: Routes = [
  {path:'', component: FormComponent},
  {path:'form', component: FormComponent},
  {path:'form2', component: Form2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [FormComponent,Form2Component];
