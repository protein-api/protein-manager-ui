import {Component, Input, OnInit} from '@angular/core';
import {MdIconRegistry} from "@angular/material";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-reaction-list',
  templateUrl: './reaction-list.component.html',
  styleUrls: ['./reaction-list.component.scss']
})
export class ReactionListComponent implements OnInit {

  @Input() list =[]

  constructor(mdIconRegistry: MdIconRegistry, sanitizer: DomSanitizer) {
    mdIconRegistry
        .addSvgIcon('cinetica',
            sanitizer.bypassSecurityTrustResourceUrl('../../../assets/icons/cinetica.svg'))
        .addSvgIcon('molecula',
            sanitizer.bypassSecurityTrustResourceUrl('../../../assets/icons/molecula.svg'))
        .addSvgIcon('reaccion',
            sanitizer.bypassSecurityTrustResourceUrl('../../../assets/icons/reaccion.svg'))
  }

  ngOnInit() {
  }

  getStringValue(value):string{
    return value?value:'-'
  }

}
