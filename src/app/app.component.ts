import { Component } from '@angular/core';
import { environment as env } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mtn-project';
  menus = ["Store", "Products & Services", "Help & Support"];
  base_storage = env.base_storage;
  public isMenuCollapsed = true;
}

