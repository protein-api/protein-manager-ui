import { Component } from '@angular/core';
import {MdIconRegistry} from "@angular/material";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(mdIconRegistry: MdIconRegistry, sanitizer: DomSanitizer){
    mdIconRegistry
        .addSvgIcon('protein',
            sanitizer.bypassSecurityTrustResourceUrl('../../../assets/icons/protein.svg'))
        .addSvgIcon('cinetica',
            sanitizer.bypassSecurityTrustResourceUrl('../../../assets/icons/cinetica.svg'))
        .addSvgIcon('molecula',
            sanitizer.bypassSecurityTrustResourceUrl('../../../assets/icons/molecula.svg'))
        .addSvgIcon('reaccion',
            sanitizer.bypassSecurityTrustResourceUrl('../../../assets/icons/reaccion.svg'))
        .addSvgIcon('structure',
            sanitizer.bypassSecurityTrustResourceUrl('../../../assets/icons/structure.svg'))
        .addSvgIcon('sequence',
            sanitizer.bypassSecurityTrustResourceUrl('../../../assets/icons/sequence.svg'))
        .addSvgIcon('link',
            sanitizer.bypassSecurityTrustResourceUrl('../../../assets/icons/links.svg'))
        .addSvgIcon('logo',
            sanitizer.bypassSecurityTrustResourceUrl('../../../assets/icons/logo.svg'))


  }
  title = 'app';
}
