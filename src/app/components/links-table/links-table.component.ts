import {Component, Input, OnInit} from '@angular/core'
import { ProteinDataService } from "../../service/protein.data.srv"
import { Protein } from "../model/model"

declare const jQuery:any
declare const $:any

@Component({
  selector: 'app-links-table',
  templateUrl: './links-table.component.html',
  styleUrls: ['./links-table.component.scss']
})

export class LinksTableComponent implements OnInit {

  @Input() links:any

  constructor(private proteinDataService:ProteinDataService) {}

  ngOnInit() {
    $('.tabs').tabs();
  }

}
