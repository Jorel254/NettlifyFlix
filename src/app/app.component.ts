import { Component } from '@angular/core';
declare var $: any;
declare function init([]): any;
declare function animationInit([]): any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'nettlifyflix';
  /**
   *
   */
  constructor() {}
  ngOnInit(): void {
    setTimeout(() => {
      init($);
      animationInit($);
    }, 50);
  }
}
