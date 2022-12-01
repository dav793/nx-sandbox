import { Component, Input } from '@angular/core';

@Component({
  selector: 'myorg-banner',
  template: `<header class="container">{{ title }}</header>`,
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent {
  @Input() title = '';
}
