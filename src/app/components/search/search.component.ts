import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ProteinDataService } from "../../service/protein.data.srv";

declare const $:any;

@Component({
    selector:'search-component',
    templateUrl:'./search.component.html',
    styleUrls:['./search.component.scss']

})

export class SearchComponent implements OnInit{

  constructor(private router:Router, private proteinDataService:ProteinDataService){}

  textSearch: string;

  ngOnInit() {
    $('select').material_select()
  }

  backClick(){}

  getAllProteins = () => {
    this.router.navigate(['/proteins']);
    this.proteinDataService.getAll();
    this.textSearch = null;
  }

  search = () => {
    if(this.textSearch) {
      this.router.navigate(['/proteins']);
      this.proteinDataService.search(this.textSearch);
    }
  }
}
