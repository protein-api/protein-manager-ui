import {Component, Input, OnInit} from "@angular/core";
import {HeaderBarService} from "../shared/services/header-bar.service";
import {Router} from "@angular/router";

@Component({
    selector:'search-component',
    templateUrl:'./search.component.html',
    styleUrls:['./search.component.scss']

})
export class SearchComponent implements OnInit{


    constructor(private headerBarService:HeaderBarService, private router:Router){

    }

    ngOnInit() {


    }

    backClick(){
        this.headerBarService.changeShowSearch();
    }

    enter(value:string){

        this.router.navigate(['/list'], { queryParams: { search: value } });
    }


}