import {Component, Input, OnInit} from "@angular/core";
import { ProteinDataService } from "../../service/protein.data.srv";
import { Protein } from "../model/model";

@Component({
  selector: 'app-reaction-list',
  templateUrl: './reaction-list.component.html',
  styleUrls: ['./reaction-list.component.scss']
})
export class ReactionListComponent implements OnInit {

  @Input() list = []
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

  getStringValue(value):string{
    return value?value:'-'
  }

  clickMolecule(url:string){
    window.open(url);
  }

}
