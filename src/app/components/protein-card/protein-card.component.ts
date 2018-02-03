import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-protein-card',
  templateUrl: './protein-card.component.html',
  styleUrls: ['./protein-card.component.css']
})
export class ProteinCardComponent implements OnInit {

  @Input() protein: any;

  constructor() { }

  ngOnInit() {
  }

  splitString(name:string):string {
      let splitArray = name.split("/");
      return splitArray.length>0?splitArray[0]:""
  }

  getAmountReactions(){
      return this.protein.reacciones.length;
  }

  getAmountStructures(){
      return this.protein.estructurasPDB.length;
  }

}
