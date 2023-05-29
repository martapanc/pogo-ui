import {NgModule} from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {ErrorComponent} from "./error/error.component";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "../app-routing.module";
import {MainComponent} from './main/main.component';
import {FooterComponent} from './footer/footer.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
  ],
  declarations: [
    MainComponent,
    HeaderComponent,
    FooterComponent,
    ErrorComponent,
  ]
})
export class CoreModule {
}
