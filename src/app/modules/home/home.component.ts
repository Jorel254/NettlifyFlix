import { Component } from '@angular/core';
declare var $: any;
declare function init([]): any;
declare function initSwiper([]): any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor() {}
  ngOnInit(): void {
    setTimeout(() => {
      init($);
      initSwiper($);
    }, 500);
  }
}
