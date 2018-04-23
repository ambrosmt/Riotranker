import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor() { }
  toggleInfo:boolean;
  toggleMatch: boolean;
  
  ngOnInit() {
    this.toggleInfo = true;
    this.toggleMatch= true;
  }
  checkToggleInfo($event){
    console.log("*****\ncheckToggle Has been called\n*****")
    this.toggleInfo = $event;
  }
}
