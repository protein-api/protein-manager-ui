import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {ProteinDataService} from "../../service/protein.data.srv";

@Component({
    selector:'search-component',
    templateUrl:'./search.component.html',
    styleUrls:['./search.component.scss']

})

export class SearchComponent implements OnInit{

  constructor(private router:Router, private proteinDataService:ProteinDataService){}

  ngOnInit() {}

  backClick(){}

  enter = (text:string) => {
    if(text) {
      this.router.navigate(['/proteins']);
      this.proteinDataService.search(text);
    }
  }
}
