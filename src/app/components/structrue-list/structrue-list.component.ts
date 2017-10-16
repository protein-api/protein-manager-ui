import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-structrue-list',
  templateUrl: './structrue-list.component.html',
  styleUrls: ['./structrue-list.component.scss']
})
export class StructrueListComponent implements OnInit {

  @Input() list =[]

  constructor() { }

  ngOnInit() {
  }

  clickStructure(url:string){
    window.open(url);
  }

}
