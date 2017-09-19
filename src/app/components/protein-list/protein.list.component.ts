/**
 * Created by murmu on 18/09/17.
 */

import {Component, OnInit} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map'
import {ActivatedRoute} from "@angular/router";
import {ProteinDataService} from "../../service/protein.data.srv";

/**
 * @title Basic table
 */
@Component({
    selector: 'protein-list',
    styleUrls: ['protein.list.component.scss'],
    templateUrl: 'protein.list.component.html',
})
export class ProteinListComponent implements OnInit{
    displayedColumns = ['nombre', 'codigoUniProt', 'organismo', 'familia'];

    public list =[]
    private sub;
    private searchText:string;

    constructor(private route:ActivatedRoute,private proteinDataService:ProteinDataService){

    }

    ngOnInit(){
        this.sub = this.route.queryParams.subscribe(
            params =>{
                this.searchText = params['search'] ||"";
                this.fetchProteins(this.searchText);
            }
        )


    }

    fetchProteins(textSearch:string){
        this.proteinDataService.getProteinaListPromise(textSearch).map((r:any) => r.json())
            .subscribe((response:any) =>{
                this.list = response

            })
    }

    ngOnDestroy(){
        this.sub.unsubscribe();
    }
}

export interface Element {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

export interface  Protein {
    nombre: string;
    codigoUniProt: string;
    organismo: string;
    familia: string;
}

