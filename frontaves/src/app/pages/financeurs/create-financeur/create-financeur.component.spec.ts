import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFinanceurComponent } from './create-financeur.component';

describe('CreateFinanceurComponent', () => {
  let component: CreateFinanceurComponent;
  let fixture: ComponentFixture<CreateFinanceurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateFinanceurComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateFinanceurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
