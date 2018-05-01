import { Component, OnInit, Input } from '@angular/core'

declare const jQuery:any
declare const $:any

declare const pv:any

@Component({
  selector: 'app-structure-card',
  templateUrl: './structure-card.component.html',
  styleUrls: ['./structure-card.component.css']
})
export class StructureCardComponent implements OnInit {

  @Input() structure: any;
  private structureLink: string;

  constructor() {

  }

  ngOnInit() {
    console.log(pv)
    $('.modal').modal()
    this.structureLink = this.getSructureLink(this.structure)

    const options = {
      width: 600,
      height: 600,
      antialias: true,
      quality : 'medium'
  }
  
  const viewer = pv.Viewer(document.getElementById('viewer'), options)
  this.loadPdb(viewer, "1r6a")
  }

  getSructureLink = (structure) => {
    const link = "https://www.rcsb.org/pdb/explore/explore.do?structureId="
    const struc = structure.includes("_") ? structure.substring(0, structure.length - 2) : structure
    return link + struc
  }

  openReactionModal = () => $('#modal-structure-' + this.structure).modal('open')

  closeReactionModal = () => $('#modal-structure-' + this.structure).modal('close')

  loadPdb = (viewer, pdbName) => {
    pv.io.fetchPdb('/assets/pv/pdbs/' + pdbName + '.pdb', (structure) => {
      // display the protein as cartoon, coloring the secondary structure
      // elements in a rainbow gradient.
      viewer.cartoon('protein', structure, { color : pv.color.ssSuccession() })
      // there are two ligands in the structure, the co-factor S-adenosyl
      // homocysteine and the inhibitor ribavirin-5' triphosphate. They have
      // the three-letter codes SAH and RVP, respectively. Let's display them
      // with balls and sticks.
      const ligands = structure.select({ rnames : ['SAH', 'RVP'] })
      viewer.ballsAndSticks('ligands', ligands)
      viewer.centerOn(structure)
  })
  }

}
