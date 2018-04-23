import { Component, OnInit } from '@angular/core';
import { RiotStaticDataService } from '../riot-static-data.service';
import { format } from 'url';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-summoner-info',
  templateUrl: './summoner-info.component.html',
  styleUrls: ['./summoner-info.component.css']
})
export class SummonerInfoComponent implements OnInit {
  placeholder = "Search by Summoner Name";
  summonerData: any;
  matchlist: any; 
  matchSearch: number;
  errors = [];
  search = false; 
  searchVal: string;
  showInfo: boolean;
  showMatch: boolean;

  constructor(private _Riotdb: RiotStaticDataService) { }

  ngOnInit() {
    this.matchSearch = 5;
    this.showInfo = true;
    this.showMatch = false;
  }
  onSubmit(form: any): void {
    console.log("form submitted: ", form)
  }
  onTxtChange(rawStr: string) {
    //framework did not honor p{L}
    var re = new RegExp("^[0-9a-zA-Z _\\.]+$");
    if (re.test(rawStr) || rawStr === ""){
      console.log("test passed");
      this.errors = [];
    }
    else{
      console.log("test failed");
      this.errors[0]="Please use Valid Characters";
    }
  }
  searchSummoner(form){
    console.log("trying to search for "+form.summoner);
    var temp = this._Riotdb.getSummonerbyName(form.summoner).subscribe(
      data => {
        console.log("\n this is the subscribed Data");
        console.log(data);
        this.summonerData = data;
      }
    );
  }
  fixtime(data){
    data.matches.forEach(game => {
      var temp = game.timestamp;
      var fix = new Date(temp);
      game.timestamp = fix.toUTCString();
    });
  }
  matchHistory(accountId){
    console.log("*****\n"+accountId+"\n*****")
    var data = {
      "id" : accountId,
      "stop": this.matchSearch,
    }
    console.log("grabbing last "+data.stop+" games");
    var temp = this._Riotdb.getMatchlist(data).subscribe(
      data =>{
        console.log('\nhere are requested games');
        console.log(data);
        this.matchlist = data;
        this.fixtime(this.matchlist);
      }
    );
  }
  toggleHide(){
    console.log("toggle Hide has been called");
    this.showInfo=false;
    this.showMatch=true;
  }
  toggleViews(){
    console.log("toggle views has been called");
    this.showInfo = true;
    this.showMatch = false;
  }
}