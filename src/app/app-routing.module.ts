import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizedLayoutComponent } from './layouts/authorized/authorized-layout/authorized-layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [{
  path: '',
  component: AuthorizedLayoutComponent,
  children: [{
    path: '', component: DashboardComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
