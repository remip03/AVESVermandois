import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AteliersChantiersInsertionComponent } from './ateliers-chantiers-insertion.component';

describe('AteliersChantiersInsertionComponent', () => {
  let component: AteliersChantiersInsertionComponent;
  let fixture: ComponentFixture<AteliersChantiersInsertionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AteliersChantiersInsertionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AteliersChantiersInsertionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
