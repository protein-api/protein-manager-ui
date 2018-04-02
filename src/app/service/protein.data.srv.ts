import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ProteinDataService{

  private subject = new Subject<any>();
  private proteinSubject = new Subject<any>();

  constructor(private http:Http){}

  searchById(proteinaId:string){
    this.http.get('/api/proteins/' + proteinaId)
    .map((r:any) => r.json())
    .subscribe(result => {
      this.proteinSubject.next(result);
    });
  }

  getAll() {
    this.http.get('/api/proteins/getAll')
      .map((r:any) => r.json())
      .subscribe( result => {
        this.subject.next(result);
      });
  }

  search(textSearch:string){
    this.http.get('/api/proteins/search/' + textSearch)
      .map((r:any) => r.json())
      .subscribe( result => {
        this.subject.next(result);
      });
  }

  getSearchResult():Observable<any> {
    return this.subject.asObservable();
  }

  getSearchResultById():Observable<any> {
    return this.proteinSubject.asObservable();
  }
}
