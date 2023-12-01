import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Practice1Component } from './components/practice1/practice1.component';
import { PracticeRootComponent } from './components/practice-root/practice-root.component';
import { Practice3Component } from './components/practice3/practice3.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: PracticeRootComponent,
      },
      {
        path: 'one',
        component: Practice1Component,
      },
      {
        path: 'three',
        component: Practice3Component,
      },
    ]
  },
  { path: "**", redirectTo: "/" },
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PracticeRoutingModule { }
