import {Injectable} from "@angular/core"

@Injectable()
export class SearchHelperService {

  private searchs = []

  constructor(){}

  getSearchs(){
    return this.searchs
  }

  getLastSearch(){
      return this.searchs.push()
  }

  addSearch(search) {
      this.searchs.push(search)
  }
}