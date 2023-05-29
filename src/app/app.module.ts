import {NgModule} from '@angular/core';
import {CoreModule} from "./core/core.module";
import {MainComponent} from "./core/main/main.component";

@NgModule({
  imports: [
    CoreModule,
  ],
  declarations: [],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule {
}
