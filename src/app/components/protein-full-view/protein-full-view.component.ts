import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Protein } from "../model/model";
import { ActivatedRoute, Router } from "@angular/router";
import { ProteinDataService } from "../../service/protein.data.srv";

declare const jQuery:any;
declare const $:any;

@Component({
  selector: 'app-protein-full-view',
  templateUrl: './protein-full-view.component.html',
  styleUrls: ['./protein-full-view.component.css']
})

export class ProteinFullViewComponent implements OnInit {

  public protein:Protein;
  private isEdit:boolean;
  private proteinId:string;
  private showDois:boolean = false;

  constructor(private proteinDataService:ProteinDataService, private router:Router, private route:ActivatedRoute, private _location:Location) {
    this.proteinId = this.route.snapshot.params['idProtein'];
    this.isEdit = this.proteinId ? true : false;
    this.protein = new Protein();

    this.proteinDataService.getSearchResultById()
      .subscribe( result => {
          this.protein = result;
        });
  }


  ngOnInit() {
    this.initializeCollapsible();
    this.getProtein();
  }

  getProtein(){
    if(this.proteinId) {
      this.proteinDataService.searchById(this.proteinId);
    }
  }

  splitSequence(sequence:string){
    return sequence?sequence.split(" "):[];
  }

  goBack() {
    this._location.back();
  }

  initializeCollapsible() {
    $(document).ready(function(){
      $('.collapsible').collapsible();
    });
  }

}
