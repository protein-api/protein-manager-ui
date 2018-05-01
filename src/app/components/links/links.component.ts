import {Component, Input, OnInit} from '@angular/core'
import { ProteinDataService } from "../../service/protein.data.srv"
import { Protein } from "../model/model"

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})

export class LinksComponent implements OnInit {

  public links:any

  constructor(private proteinDataService:ProteinDataService) {
    this.proteinDataService.getSearchResultById().subscribe( result => this.links = result.dois )
  }

  ngOnInit() {}

  getLinks = (type) => (this.links.filter(link => link.tipo === type))

}
