import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoComponent } from './components/logo/logo.component';
import { MenuComponent } from './components/menu/menu.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { AllTasksComponent } from './sections/all-tasks/all-tasks.component';
import { MyTasksComponent } from './sections/my-tasks/my-tasks.component';
import { MyGroupTasksComponent } from './sections/my-group-tasks/my-group-tasks.component';
import { FindACaseComponent } from './sections/find-a-case/find-a-case.component';
import { HistoricalCasesComponent } from './sections/historical-cases/historical-cases.component';
import { ActiveCasesComponent } from './sections/active-cases/active-cases.component';
import { MyDashboardComponent } from './sections/my-dashboard/my-dashboard.component';
import { HomeComponent } from './sections/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    MenuComponent,
    SideBarComponent,
    AllTasksComponent,
    MyTasksComponent,
    MyGroupTasksComponent,
    FindACaseComponent,
    HistoricalCasesComponent,
    ActiveCasesComponent,
    MyDashboardComponent,
    HomeComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
