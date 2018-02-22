import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRouter } from './dashboard.router';

@NgModule({
  declarations: [ DashboardComponent ],
  imports: [ CommonModule,
              DashboardRouter  ],
  providers: [],
  exports: [ DashboardComponent ]
})

export class DashboardModule { }
