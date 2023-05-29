import {NgModule} from '@angular/core';
import {NavbarComponent} from "./navbar/navbar.component";
import {ErrorComponent} from "./error/error.component";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "../app-routing.module";
import {MainComponent} from './main/main.component';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  declarations: [
    ErrorComponent,
    NavbarComponent,
    MainComponent,
  ]
})
export class CoreModule {
}
