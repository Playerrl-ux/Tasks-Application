import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsDatePresenterComponent } from './stats-date-presenter.component';

describe('StatsDatePresenterComponent', () => {
  let component: StatsDatePresenterComponent;
  let fixture: ComponentFixture<StatsDatePresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatsDatePresenterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatsDatePresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
