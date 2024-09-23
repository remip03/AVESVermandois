import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePanierComponent } from './create-panier.component';

describe('CreatePanierComponent', () => {
  let component: CreatePanierComponent;
  let fixture: ComponentFixture<CreatePanierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatePanierComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePanierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
