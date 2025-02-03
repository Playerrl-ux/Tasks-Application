import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDateStatsComponent } from './search-date-stats.component';

describe('SearchDateStatsComponent', () => {
  let component: SearchDateStatsComponent;
  let fixture: ComponentFixture<SearchDateStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchDateStatsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchDateStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
