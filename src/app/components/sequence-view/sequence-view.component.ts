import { Component, OnInit, Input } from '@angular/core';

import { ProteinDataService } from "../../service/protein.data.srv";
import { Protein } from "../model/model";

declare const jQuery:any;
declare const $:any;

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
        });
  }

  ngOnInit() {
  }

}
