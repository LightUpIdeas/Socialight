import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ChartModule } from 'angular-highcharts';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
//Material
import { CustomMaterialModule } from "./material/material.module";
//HighCharts
import { HighchartsChartComponent } from 'highcharts-angular';

import { AppComponent } from './app.component';


import { SidebarNavComponent } from './sidebar-nav/sidebar-nav.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LocationsComponent } from './locations/locations.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WidgetComponent } from './widget/widget.component';
import { TableComponent } from './table/table.component';
import { DashTableComponent } from './dashtable/dashtable.component';
import { FullChartComponent } from './fullchart/fullchart.component';
import { HalfChartComponent } from './halfchart/halfchart.component';

import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { JwtInterceptor } from './_helpers/index';
import { AlertService, AuthenticationService, UserService , RequestService } from './_services/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';



const appRoutes: Routes = [
 
  // { path: '',   redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
  // { path: '',   component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent, data: { title: 'Dashboard' }},
  { path: 'locations', component: LocationsComponent, data: { title: 'Locations' } },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    SidebarNavComponent,
    HeaderComponent,
    DashboardComponent,
    LocationsComponent,
    PageNotFoundComponent,
    WidgetComponent,
    AlertComponent,
    LoginComponent,
    RegisterComponent,
    HighchartsChartComponent,
    TableComponent,
    DashTableComponent,
    FullChartComponent,
    HalfChartComponent


    
  ],
  imports: [
     RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    HttpClientModule,
    ChartModule
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    RequestService,
    UserService,
    {
        provide: HTTP_INTERCEPTORS,
        useClass: JwtInterceptor,
        multi: true
    }

    // provider used to create fake backend
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
