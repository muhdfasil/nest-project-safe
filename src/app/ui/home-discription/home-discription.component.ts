import { Component, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home-discription',
  imports: [],
  templateUrl: './home-discription.component.html',
  styleUrl: './home-discription.component.css'
})
// export class HomeDiscriptionComponent {

// }
export class HomeDiscriptionComponent implements AfterViewInit {

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const pElement = this.el.nativeElement.querySelector('.slide-left');
    const uElement = this.el.nativeElement.querySelector('.scale-in');

    // Observer for <p> tag
    const observerP = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          pElement.classList.add('visible');
          observerP.unobserve(pElement);
        }
      },
      { threshold: 0.1 }
    );
    observerP.observe(pElement);

    // Observer for <u> tag
    const observerU = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          uElement.classList.add('visible');
          observerU.unobserve(uElement);
        }
      },
      { threshold: 0.1 }
    );
    observerU.observe(uElement);
  }
}