import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerObservableComponent } from './primer-observable.component';

describe('PrimerObservableComponent', () => {
  let component: PrimerObservableComponent;
  let fixture: ComponentFixture<PrimerObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimerObservableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimerObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
