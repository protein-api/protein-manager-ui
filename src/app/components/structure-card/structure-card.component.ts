import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-structure-card',
  templateUrl: './structure-card.component.html',
  styleUrls: ['./structure-card.component.css']
})
export class StructureCardComponent implements OnInit {

  @Input() structure: any;
  private structureLink: string;

  constructor() {

  }

  ngOnInit() {
    this.structureLink = this.getSructureLink(this.structure);
  }

  getSructureLink = (structure) => {
    const link = "https://www.rcsb.org/pdb/explore/explore.do?structureId=";
    const struc = structure.includes("_") ? structure.substring(0, structure.length - 2) : structure;
    return link + struc;
  }

}
