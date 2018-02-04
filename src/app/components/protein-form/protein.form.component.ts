import {Component, OnInit} from "@angular/core";

import {Protein} from "../model/model";
import {ProteinDataService} from "../../service/protein.data.srv";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'protein-form',
    templateUrl: './protein.form.component.html',
    styleUrls: ['./protein.form.component.scss']
})
export class ProteinFormComponent implements OnInit{

    public model:Protein;
    private isEdit:boolean;
    private proteinaId:string;
    private showDois:boolean = false;

    constructor(private proteinaDataService:ProteinDataService,private router:Router, private route:ActivatedRoute) {
        this.proteinaId = this.route.snapshot.params['idProtein'];
        this.isEdit = this.proteinaId?true:false;
        this.model = new Protein();
    }

    ngOnInit() {
        this.fetchProteina();
    }

    fetchProteina(){
      
        // if(this.proteinaId){
        //     this.proteinaDataService.search(this.proteinaId).map((r: any) => r.json()).subscribe((response:any) =>{
        //         this.model = response;
        //         this.isEdit = false;
        //     });
        // }
        // else this.isEdit = true;
    }

   splitSequence(sequence:string){
        return sequence?sequence.split(" "):[];
   }

}
