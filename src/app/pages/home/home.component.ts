import { Component } from '@angular/core';
import { HomeCarouselComponent } from "../../ui/home-carousel/home-carousel.component";
import { HomeDiscriptionComponent } from "../../ui/home-discription/home-discription.component";

@Component({
  selector: 'app-home',
  imports: [HomeCarouselComponent, HomeDiscriptionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
