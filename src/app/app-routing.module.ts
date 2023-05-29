import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {navbarRoute} from "./core/navbar/navbar.route";
import {errorRoute} from "./core/error/error.route";

const LAYOUT_ROUTES: Routes = [
  navbarRoute,
  {
    path: 'home',
    loadChildren: () => import('./module/home/home.module').then(m => m.HomeModule),
  },
  {
    path: '',
    redirectTo: "/home",
    pathMatch: 'full'
  },
  ...errorRoute
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        ...LAYOUT_ROUTES,
      ],
      {
        enableTracing: false,
        useHash: true
      },
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
