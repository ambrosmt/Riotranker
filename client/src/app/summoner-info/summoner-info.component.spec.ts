import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummonerInfoComponent } from './summoner-info.component';

describe('SummonerInfoComponent', () => {
  let component: SummonerInfoComponent;
  let fixture: ComponentFixture<SummonerInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummonerInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummonerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
