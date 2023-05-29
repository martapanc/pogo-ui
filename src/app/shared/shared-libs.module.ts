import {NgModule} from "@angular/core";
import {MenubarModule} from "primeng/menubar";

@NgModule({
  imports: [
    MenubarModule
  ],
  exports: [
    MenubarModule,
  ],
})
export class SharedLibsModule {

}
