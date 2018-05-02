import { Component, OnInit, Input } from '@angular/core';

declare const jQuery:any
declare const $:any

@Component({
  selector: 'app-protein-card',
  templateUrl: './protein-card.component.html',
  styleUrls: ['./protein-card.component.css']
})
export class ProteinCardComponent implements OnInit {

  @Input() protein: any;

  constructor() { }

  ngOnInit() {
    $('.tooltipped').tooltip();
  }

  splitString(name:string):string {
    let splitArray = name.split("/");
    return name.split("/").length > 0 ? splitArray[0] : ""
  }

  getAmountReactions = () => this.protein.reacciones.length

  getAmountStructures = () => this.protein.estructurasPDB[0] ? this.protein.estructurasPDB[0].codigo.split(",").length : 0

}
