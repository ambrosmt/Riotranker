import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RiotStaticDataService {

  constructor(private _http: HttpClient) { }
  getSummonerbyName(name){
    var summoner = name;
    console.log("RSDS is being called!!!!!\nSearching for " +summoner);
    return this._http.get(`/summoner/${name}`);
  }
  getMatchlist(data){
    return this._http.get(`/matchlist/${data.id}/0/${data.stop}`);
  }
}

// if (/^[0-9\\p{L} _\\.]+$/.test(name)) {
//   console.log("test passed")
// }
// else {
//   console.log("test failed")
// }