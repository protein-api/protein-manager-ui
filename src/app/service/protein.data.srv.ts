import {Injectable} from "@angular/core"
import {Http} from "@angular/http"
import { Observable } from 'rxjs'
import { Subject } from 'rxjs/Subject'

@Injectable()
export class ProteinDataService{

  private subject = new Subject<any>()
  private proteinSubject = new Subject<any>()

  constructor(private http:Http){}

  searchById(proteinaId:string){
    this.http.get('/api/proteins/get/' + proteinaId)
    .map((r:any) => r.json())
    .subscribe(result => {
      this.proteinSubject.next(result);
    })
  }

  getAll() {
    this.http.get('/api/proteins/getAll')
      .map((r:any) => r.json())
      .subscribe( result => {
        this.subject.next(result)
      })
  }

  search(textSearch:string){
    this.http.get('/api/proteins/search/' + textSearch)
      .map((r:any) => r.json())
      .subscribe( result => {
        this.subject.next(result)
      })
  }

  searchByReaction(search:string){
    this.http.get('/api/proteins/searchByReaction/' + search)
      .map((r:any) => r.json())
      .subscribe( result => {
        this.subject.next(result)
      })
  }

  searchByOrganism(search:string){
    this.http.get('/api/proteins/searchByOrganism/' + search)
      .map((r:any) => r.json())
      .subscribe( result => {
        this.subject.next(result);
      })
  }

  getSearchResult():Observable<any> {
    return this.subject.asObservable()
  }

  getSearchResultById():Observable<any> {
    return this.proteinSubject.asObservable()
  }
}
