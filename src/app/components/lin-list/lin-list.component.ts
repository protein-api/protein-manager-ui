import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-lin-list',
  templateUrl: './lin-list.component.html',
  styleUrls: ['./lin-list.component.scss']
})
export class LinListComponent implements OnInit {

  @Input() list =[]

  constructor() { }

  ngOnInit() {
  }

  clickStructure(url:string){
    window.open(url);
  }

}
