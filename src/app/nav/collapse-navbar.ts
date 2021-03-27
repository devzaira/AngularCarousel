import {Component} from '@angular/core';
import { environment as env } from '../../environments/environment';

@Component({
  selector: 'nav-bar',
  templateUrl: './collapse-navbar.html',
  styleUrls: ['./collapse-navbar.css']
})
export class NgbdCollapseNavbar {
  // title = 'mtn-project';
  menus = ["Store", "Products & Services", "Help & Support"];
  base_storage = env.base_storage;
  public isMenuCollapsed = true;
}
