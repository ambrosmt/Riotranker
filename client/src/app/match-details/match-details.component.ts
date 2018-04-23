import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-match-details',
  templateUrl: './match-details.component.html',
  styleUrls: ['./match-details.component.css']
})
export class MatchDetailsComponent implements OnInit {
  participantId: any;
  participantList: any;
  matchData : any;
  constructor() { }

  ngOnInit() {
  }
}
