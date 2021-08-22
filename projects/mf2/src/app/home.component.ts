import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mf2-home',
  template: `
    <h2>MF2 - Home</h2>
    <a [routerLink]="['/mf2-admin']">MF1 - Admin</a>
  `,
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
