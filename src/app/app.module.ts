import {NgModule} from '@angular/core';
import {CoreModule} from "./core/core.module";
import {MainComponent} from "./core/main/main.component";
import {SharedModule} from "./shared/shared.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    SharedModule,
    CoreModule,
    NgbModule,
  ],
  declarations: [],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule {
}
