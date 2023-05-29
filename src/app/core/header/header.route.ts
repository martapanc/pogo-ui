import {HeaderComponent} from "./header.component";
import {Route} from "@angular/router";

export const headerRoute: Route = {
  path: '',
  component: HeaderComponent,
  outlet: 'navbar',
};
