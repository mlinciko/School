import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTooltipModule } from "@angular/material/tooltip";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';



@NgModule({
  imports: [
    CommonModule,
    MatTooltipModule,
    MatProgressSpinnerModule
  ],
  exports: [
    MatTooltipModule,
    MatProgressSpinnerModule,
  ]
})
export class MaterialModule { }
