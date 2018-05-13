import { Component, OnInit, Input } from '@angular/core';

declare const jQuery:any;
declare const $:any;

@Component({
  selector: 'app-reaction-card',
  templateUrl: './reaction-card.component.html',
  styleUrls: ['./reaction-card.component.css']
})
export class ReactionCardComponent implements OnInit {

  @Input() reaction: any

  constructor() { }

  ngOnInit() {
    $('.modal').modal()
    console.log(this.reaction)
  }

  getMolecules = (type) => {
    console.log(this.reaction)
  }

  openReactionModal = () => {
    $('#modal-reaction-' + this.reaction.id).modal('open')
  }

  closeReactionModal = () => {
    $('#modal-reaction-' + this.reaction.id).modal('close')
  }

  cineticType = (type) => (type === "REACTIVO" ? "Reactive" : "Product")

}
