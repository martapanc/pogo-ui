import {NavbarComponent} from "./navbar.component";
import {Route} from "@angular/router";

export const navbarRoute: Route = {
  path: '',
  component: NavbarComponent,
  outlet: 'navbar',
};
