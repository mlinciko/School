import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainRootComponent } from './modules/main/components/main-root/main-root.component';
import { AppGuard } from './app.guard';
import { GradesComponent } from './modules/main/components/grades/grades.component';

const routes: Routes = [
  {
    path: "sign",
    loadChildren: () =>
      import("./modules/auth/auth.module").then(
        (m) => m.AuthModule
      ),
  },
  {
    path: "practice",
    loadChildren: () => import("./modules/practice/practice.module").then((m) => m.PracticeModule)
  },
  {
    path: "",
    component: MainRootComponent,
    children: [
      {
        path: "account",
        canActivate: [AppGuard],
        loadChildren: () =>
          import("./modules/account/account.module").then(
            (m) => m.AccountModule
          ),
      },
      {
        path: '',
        component: GradesComponent,
      }
    ]
  },
  { path: "**", redirectTo: ""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
