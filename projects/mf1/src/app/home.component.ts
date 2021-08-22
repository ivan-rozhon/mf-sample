import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mf1-home',
  template: `
    <h2>MF1 - Home</h2>
    <a [routerLink]="['/mf1-search']">MF1 - Search</a>
  `,
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
