import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";

@Component({
    selector:'search-component',
    templateUrl:'./search.component.html',
    styleUrls:['./search.component.scss']

})
export class SearchComponent implements OnInit{


    constructor( private router:Router){

    }

    ngOnInit() {


    }

    backClick(){

    }

    enter(value:string){

        this.router.navigate(['/list'], { queryParams: { search: value } });
    }


}