import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeLComponent } from './fe-l.component';

describe('FeLComponent', () => {
  let component: FeLComponent;
  let fixture: ComponentFixture<FeLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeLComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
