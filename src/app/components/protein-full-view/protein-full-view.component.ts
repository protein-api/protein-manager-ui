import { Component, OnInit } from '@angular/core';

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-protein-full-view',
  templateUrl: './protein-full-view.component.html',
  styleUrls: ['./protein-full-view.component.css']
})

export class ProteinFullViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.initializeCollapsible();
  }


  initializeCollapsible() {
    $(document).ready(function(){
      $('.collapsible').collapsible();
    });
  }

}
