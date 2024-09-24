import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavoirFerComponent } from './savoir-fer.component';

describe('SavoirFerComponent', () => {
  let component: SavoirFerComponent;
  let fixture: ComponentFixture<SavoirFerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavoirFerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavoirFerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
