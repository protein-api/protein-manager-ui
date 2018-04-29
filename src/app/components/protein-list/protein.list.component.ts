/**
 * Created by murmu on 18/09/17.
 */

import {Component, OnInit, OnDestroy, ChangeDetectorRef} from "@angular/core";
import "rxjs/add/observable/of";
import "rxjs/add/operator/map";
import {ActivatedRoute, Router, NavigationStart} from "@angular/router";
import {ProteinDataService} from "../../service/protein.data.srv";
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'protein-list',
    styleUrls: ['protein.list.component.scss'],
    templateUrl: 'protein.list.component.html',
})

export class ProteinListComponent implements OnInit{
    displayedColumns = ['nombre', 'codigoUniProt', 'organismo', 'familia'];

    private searchText:string;
    private isEmptyList:boolean = false;
    private proteins = [];
    private subscription: Subscription;

    constructor(private route:ActivatedRoute, private proteinDataService:ProteinDataService, private router:Router, private changeDetector : ChangeDetectorRef){
      this.subscription = this.proteinDataService.getSearchResult()
      .subscribe(proteins => {
        this.proteins = proteins;
        this.isEmptyList = this.proteins.length < 1;
        this.changeDetector.detectChanges();
      });
    }

    ngOnInit(){}

    getAllProteins = () => {
      this.proteinDataService.getAll();
      this.isEmptyList = false;
      this.changeDetector.detectChanges();
    }

    ngOnDestroy() {
      this.subscription.unsubscribe();
    }

    showProtein(id){
      this.router.navigate(['/protein/'+ id]);
    }

    splitString(name:string):string{
      let splitArray = name.split("/");
      return splitArray.length>0?splitArray[0]:""

    }

    getAmountReactions(model){
      return model.reacciones.length;
    }

    getAmountStructures(model){
      return model.estructurasPDB.length;
    }
}

export interface Element {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

export interface  Protein {
    id:number;
    nombre: string;
    codigoUniProt: string;
    organismo: string;
    familia: string;
}
