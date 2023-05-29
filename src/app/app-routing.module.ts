import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {headerRoute} from "./core/header/header.route";
import {errorRoute} from "./core/error/error.route";

const LAYOUT_ROUTES: Routes = [
  headerRoute,
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
