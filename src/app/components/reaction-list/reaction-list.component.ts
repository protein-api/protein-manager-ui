import {Component, Input, OnInit} from "@angular/core";

@Component({
  selector: 'app-reaction-list',
  templateUrl: './reaction-list.component.html',
  styleUrls: ['./reaction-list.component.scss']
})
export class ReactionListComponent implements OnInit {

  @Input() list =[]

  constructor() {


  }

  ngOnInit() {
  }

  getStringValue(value):string{
    return value?value:'-'
  }

}
