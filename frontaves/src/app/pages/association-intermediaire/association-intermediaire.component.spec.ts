import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociationIntermediaireComponent } from './association-intermediaire.component';

describe('AssociationIntermediaireComponent', () => {
  let component: AssociationIntermediaireComponent;
  let fixture: ComponentFixture<AssociationIntermediaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssociationIntermediaireComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssociationIntermediaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
