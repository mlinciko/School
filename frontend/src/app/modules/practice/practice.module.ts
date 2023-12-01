import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Practice1Component } from './components/practice1/practice1.component';
import { PracticeRoutingModule } from './practice-routing.module';
import { DevExtremeModule } from 'devextreme-angular';
import { PracticeRootComponent } from './components/practice-root/practice-root.component';
import { Practice3Component } from './components/practice3/practice3.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    Practice1Component,
    PracticeRootComponent,
    Practice3Component
  ],
  imports: [
    CommonModule,
    PracticeRoutingModule,
    DevExtremeModule,
    MaterialModule
  ]
})
export class PracticeModule { }
