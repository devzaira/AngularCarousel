import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { environment as env } from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items = [{
    image: `${env.base_storage}/get-a-device.png`,
    title: "Get a device",
    subtitle: "Start Here >"
  },{
    image: `${env.base_storage}/add-a-line.png`,
    title: "Add a phone-line",
    subtitle: "Start Here >"
  },{
    image: `${env.base_storage}/upgrade.png`,
    title: "Upgrade",
    subtitle: "Start Here >"
  },{
    image: `${env.base_storage}/mobile-internet.png`,
    title: "Mobile internet",
    subtitle: "Start Here >"
  },{
    image: `${env.base_storage}/home-internet.png`,
    title: "Home internet",
    subtitle: "Start Here >"
  },{
    image: `${env.base_storage}/get-a-device.png`,
    title: "Get a device",
    subtitle: "Start Here >"
  },{
    image: `${env.base_storage}/add-a-line.png`,
    title: "Add a phone-line",
    subtitle: "Start Here >"
  },{
    image: `${env.base_storage}/upgrade.png`,
    title: "Upgrade",
    subtitle: "Start Here >"
  }]

  constructor() { }

  ngOnInit(): void {
  }
  customOptions: OwlOptions = {
    loop: true,
    center: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    nav: true,
    navText: [
      "<div class='card-nav-button btn btn-dark'><</div>",
      "<div class='card-nav-button btn btn-dark'>></div>"],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 3
      },
      940: {
        items: 5
      }
    }
  }
}
