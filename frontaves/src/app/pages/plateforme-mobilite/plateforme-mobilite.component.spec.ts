import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlateformeMobiliteComponent } from './plateforme-mobilite.component';

describe('PlateformeMobiliteComponent', () => {
  let component: PlateformeMobiliteComponent;
  let fixture: ComponentFixture<PlateformeMobiliteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlateformeMobiliteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlateformeMobiliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
