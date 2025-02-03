import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDescriptionComponent } from './input-description.component';

describe('InputDescriptionComponent', () => {
  let component: InputDescriptionComponent;
  let fixture: ComponentFixture<InputDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputDescriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
