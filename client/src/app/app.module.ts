import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { MaterializeModule } from "angular2-materialize";
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SummonerInfoComponent } from './summoner-info/summoner-info.component';

import { RiotStaticDataService } from './riot-static-data.service';
import { MatchDetailsComponent } from './match-details/match-details.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    SummonerInfoComponent,
    MatchDetailsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // MaterializeModule
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [RiotStaticDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
