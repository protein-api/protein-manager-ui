import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reaction-card',
  templateUrl: './reaction-card.component.html',
  styleUrls: ['./reaction-card.component.css']
})
export class ReactionCardComponent implements OnInit {

  @Input() reaction: any;

  constructor() { }

  ngOnInit() {
    console.log(this.reaction);
  }

}
