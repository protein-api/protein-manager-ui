import {Component, Input} from '@angular/core'
import { ProteinDataService } from "../../service/protein.data.srv"
import { Protein } from "../model/model"

declare const jQuery:any
declare const $:any

@Component({
  selector: 'app-molecules-table',
  templateUrl: './molecules-table.component.html',
  styleUrls: ['./molecules-table.component.scss']
})

export class MoleculesTableComponent {

  @Input() molecules:any

  constructor(private proteinDataService:ProteinDataService) {}


}
