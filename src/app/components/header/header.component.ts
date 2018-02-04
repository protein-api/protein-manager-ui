import { Component, OnInit } from '@angular/core';

declare const jQuery:any;
declare const $:any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.initHeader();
  }

  initHeader() {
    $('.button-collapse').sideNav();
  }

}
