import { Component, OnInit } from "@angular/core"
import { FormGroup, FormControl } from '@angular/forms'
import { Router } from "@angular/router"
import { ProteinDataService } from "../../service/protein.data.srv"
import { SearchHelperService } from "../../service/search.helper.srv";

@Component({
    selector:'search-component',
    templateUrl:'./search.component.html',
    styleUrls:['./search.component.scss']

})

export class SearchComponent implements OnInit {

  constructor(private router:Router, private proteinDataService:ProteinDataService, private searchHelper:SearchHelperService) {
  }

  textSearch: string
  selectedSearch:string = 'PROTEIN'

  ngOnInit() {
    if(this.searchHelper.getSearchs().length === 1) {
        let lastSearch = this.searchHelper.getSearchs().slice(-1)[0]
        this.textSearch = lastSearch.searchText
        this.selectedSearch = lastSearch.searchType
    }
  }

  selectChangeHandler(searchType:any) {
    this.selectedSearch = searchType
  }

  backClick(){}

  getAllProteins = () => {
    this.router.navigate(['/proteins']);
    this.proteinDataService.getAll();
    this.textSearch = null;
  }

  search = () => {
    if(this.textSearch && this.selectedSearch) {
      this.searchHelper.addSearch({searchType:this.selectedSearch, searchText:this.textSearch, goBack:false})
      this.router.navigate(['/proteins'])
      if(this.selectedSearch === 'PROTEIN') {
        //search by protein
        console.log("search by protein")
        this.proteinDataService.search(this.textSearch)
      } else if(this.selectedSearch === 'REACTION') {
        //search by reaction
        this.proteinDataService.searchByReaction(this.textSearch)
      } else {
        //search by organism
        this.proteinDataService.searchByOrganism(this.textSearch)
      }
      
    }
  }

  onChangeSelect = ($event) => {
    console.log($event)
  }

  selectChange($event) {
    console.log($event)
  }
  
}
