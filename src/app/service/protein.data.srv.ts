import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
/**
 * Created by murmu on 16/06/17.
 */

@Injectable()
export class ProteinDataService{

    constructor(private http:Http){}





    getProteinaPromise(proteinaId:string){
        return this.http.get('/api/proteina/'+proteinaId);
    }

    getProteinaListPromise(textSearch:string){
        return this.http.get('/api/proteina?search='+textSearch);
    }
}
