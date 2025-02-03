import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PresenterLoginComponent } from './presenter.component';

describe('PresenterComponent', () => {
  let component: PresenterLoginComponent;
  let fixture: ComponentFixture<PresenterLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PresenterLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresenterLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
