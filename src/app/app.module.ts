import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorizedLayoutComponent } from './layouts/authorized/authorized-layout/authorized-layout.component';
import { AuthorizedSideNavComponent } from './layouts/authorized/authorized-side-nav/authorized-side-nav.component';
import { AuthorizedTopNavComponent } from './layouts/authorized/authorized-top-nav/authorized-top-nav.component';
import { AuthorizedSideNavTogglerComponent } from './layouts/authorized/authorized-side-nav-toggler/authorized-side-nav-toggler.component';
import { PageContentComponent } from './layouts/page-content/page-content.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorizedLayoutComponent,
    AuthorizedSideNavComponent,
    AuthorizedTopNavComponent,
    AuthorizedSideNavTogglerComponent,
    PageContentComponent,
    DashboardComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
