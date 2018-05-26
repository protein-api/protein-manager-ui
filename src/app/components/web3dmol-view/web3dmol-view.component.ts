import { Component, Input } from '@angular/core'
import { DomSanitizer, SafeResourceUrl, SafeUrl, SafeHtml } from '@angular/platform-browser'

import { ProteinDataService } from "../../service/protein.data.srv"
import { Protein } from "../model/model"

//declare const w3m:any

@Component({
  selector: 'app-web3dmol-view',
  templateUrl: './web3dmol-view.component.html',
  styleUrls: ['./web3dmol-view.component.scss']
})

export class Web3DMolViewComponent {

  @Input()
  private uniprot: any
  @Input()
  private structure: any
  private url:SafeResourceUrl

  constructor(private sanitizer: DomSanitizer, private proteinDataService:ProteinDataService) {

  }

  ngOnInit() {
    console.log(this.uniprot)
    //console.log(w3m)
    let url = `http://web3dmol.duapp.com/?id=${this.structure}`
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(url)
    //this.loadWeb3dMol(this.uniprot)
  }
  
}
