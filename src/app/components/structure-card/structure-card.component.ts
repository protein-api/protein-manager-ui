import { Component, OnInit, Input } from '@angular/core'
import {MaterializeDirective } from "angular2-materialize"

import { DomSanitizer, SafeResourceUrl, SafeUrl, SafeHtml } from '@angular/platform-browser'

declare const jQuery:any
declare const $:any

declare const pv:any

@Component({
  selector: 'app-structure-card',
  templateUrl: './structure-card.component.html',
  styleUrls: ['./structure-card.component.css']
})
export class StructureCardComponent implements OnInit {

  @Input() structure: any
  @Input() uniprot: any
  @Input() sitesActives: any
  private structureLink: string
  private viewer:any
  private pvStructure:any
  private dmolUrl: SafeResourceUrl
  private dmol: SafeHtml

  constructor(private sanitizer: DomSanitizer,) {}

  ngOnInit() {
    $('.modal').modal()
    this.structureLink = this.getSructureLink(this.structure)
  }

  getSructureLink = (structure) => ("https://www.rcsb.org/pdb/explore/explore.do?structureId=" + this.getStructureName(structure))

  getStructureName = (structure) => (structure.includes("_") ? structure.substring(0, structure.length - 2) : structure)

  getChain = (structure) => (structure.includes("_") ? structure.substring(structure.length - 1) : '')

  getListStringSitesActives = (sitesActives) => {
    let can = sitesActives.sitiosActCan.split(', ')
    let prot = sitesActives.sitiosActProm.split(', ')
    return Array.from(new Set(can.concat(prot))).join()
  }

  openReactionModal = () => {
    this.load3dmol()
    $('#modal-structure-' + this.structure).modal('open')

    /* const options = {
      width: 600,
      height: 600,
      antialias: true,
      quality : 'medium'
    } */
    //$('#viewer-'+this.structure).empty();
    //this.viewer = pv.Viewer(document.getElementById('viewer-'+this.structure), options)
    //this.loadPdb("1r6a")
  }

  closeReactionModal = () => $('#modal-structure-' + this.structure).modal('close')

  load3dmol = () => {
    let can = this.sitesActives.sitiosActCan != '' ? `&select=resi:${this.sitesActives.sitiosActCan.replace(/\s/g, "")};chain:${this.getChain(this.structure)}&labelres=backgroundOpacity:0.8;backgroundColor:red;fontSize:14` : ''
    let prom = this.sitesActives.sitiosActProm != '' ? `&select=resi:${this.sitesActives.sitiosActProm.replace(/\s/g, "")};chain:${this.getChain(this.structure)}&labelres=backgroundOpacity:0.8;backgroundColor:blue;fontSize:16` : ''
    let url = `http://3Dmol.csb.pitt.edu/viewer.html?pdb=${this.getStructureName(this.structure)}&style=cartoon:color~spectrum${can}${prom}`
    let html = `<embed width="100%" height="600px" src="${url}" />`
    this.dmolUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url)
    this.dmol = this.sanitizer.bypassSecurityTrustHtml(html)
  }

  loadPdb = (pdbName) => {
    pv.io.fetchPdb('/assets/pv/pdbs/' + pdbName + '.pdb', (structure) => {
      // display the protein as cartoon, coloring the secondary structure
      // elements in a rainbow gradient.
      this.viewer.cartoon('protein', structure, { color : pv.color.ssSuccession() })
      // there are two ligands in the structure, the co-factor S-adenosyl
      // homocysteine and the inhibitor ribavirin-5' triphosphate. They have
      // the three-letter codes SAH and RVP, respectively. Let's display them
      // with balls and sticks.
      this.viewer.autoZoom()
      const ligands = structure.select({ rnames : ['SAH', 'RVP'] })
      this.viewer.ballsAndSticks('ligands', ligands)
      this.viewer.centerOn(structure)
      this.pvStructure = structure
    })
  }

  autoZoom = () => this.viewer.autoZoom()

  rotate = () => this.viewer.rotate()

  lines = () => {
    this.viewer.clear()
    this.viewer.lines('structure', this.pvStructure)
  }

  cartoon = () => {
    this.viewer.clear()
    this.viewer.cartoon('structure', this.pvStructure, { color: pv.color.ssSuccession() })
  }
  lineTrace = () => {
    this.viewer.clear()
    this.viewer.lineTrace('structure', this.pvStructure)
  }
  tube = () => {
    this.viewer.clear()
    this.viewer.tube('structure', this.pvStructure)
  }
  trace = () => {
    this.viewer.clear()
    this.viewer.trace('structure', this.pvStructure)
  }

}
