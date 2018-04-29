import { Component, OnInit, Input } from '@angular/core';

import { ProteinDataService } from "../../service/protein.data.srv";
import { Protein } from "../model/model";

declare const pviz:any;

@Component({
  selector: 'app-sequence-view',
  templateUrl: './sequence-view.component.html',
  styleUrls: ['./sequence-view.component.css']
})
export class SequenceViewComponent implements OnInit {

  public protein:Protein;

  constructor(private proteinDataService:ProteinDataService) {
    this.protein = new Protein();
    this.proteinDataService.getSearchResultById()
      .subscribe( result => {
          this.protein = result;
          this.loadSequence(this.protein);
        });
  }

  ngOnInit() {
  }

  getListOfPositions = (stringList) => stringList.split(', ').map(Number)

  loadSequence = (protein) => {
    const seqEntry = new pviz.SeqEntry({sequence : protein.secuencia})

    new pviz.SeqEntryAnnotInteractiveView({
      model : seqEntry,
      el : '#main'
      }).render()

    if(protein.sitiosActivo.sitiosActCan) {
      this.getListOfPositions(protein.sitiosActivo.sitiosActCan).forEach( (index) => {
        seqEntry.addFeatures([
          {category : 'Canonical active site', type : 'bar', start : index-1 , end : index-1, text : ''}
        ]);
      })
    }

    if (protein.sitiosActivo.sitiosActProm) {
      this.getListOfPositions(protein.sitiosActivo.sitiosActProm).forEach( (index) => {
        seqEntry.addFeatures([
          {category : 'Promiscuit active site', type : 'bar', start : index-1, end : index-1, text : ''}
        ]);
      })
    }
  }

}
