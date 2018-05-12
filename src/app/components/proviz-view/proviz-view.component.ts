import { Component, Input } from '@angular/core'
import { DomSanitizer, SafeResourceUrl, SafeUrl, SafeHtml } from '@angular/platform-browser'

import { ProteinDataService } from "../../service/protein.data.srv"
import { Protein } from "../model/model"

@Component({
  selector: 'app-proviz-view',
  templateUrl: './proviz-view.component.html',
  styleUrls: ['./proviz-view.component.scss']
})

export class ProVizViewComponent {

  private url: SafeResourceUrl
  private proviz: SafeHtml
  public protein: Protein

  constructor(private sanitizer: DomSanitizer, private proteinDataService:ProteinDataService) {
    this.protein = new Protein();
    this.proteinDataService.getSearchResultById()
      .subscribe( result => {
          this.protein = result
          this.loadProViz()
        });
  }

  loadProViz = () => {
    let url = `http://proviz.ucd.ie/proviz.php?uniprot_acc=${this.protein.codigoUniProt}`
    let html = `<embed width="100%" height="600px" src="${url}" />`
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(url)
    this.proviz = this.sanitizer.bypassSecurityTrustHtml(html)
  }

}
