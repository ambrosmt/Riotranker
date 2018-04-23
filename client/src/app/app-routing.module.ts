import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SummonerInfoComponent } from './summoner-info/summoner-info.component';
import { MatchDetailsComponent } from './match-details/match-details.component'
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  { path: "details/:id", component: MatchDetailsComponent },
  { path: "", component: FooterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
