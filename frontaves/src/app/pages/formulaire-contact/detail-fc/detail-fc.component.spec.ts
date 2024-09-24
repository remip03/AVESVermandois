import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailFcComponent } from './detail-fc.component';

describe('DetailFcComponent', () => {
  let component: DetailFcComponent;
  let fixture: ComponentFixture<DetailFcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailFcComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailFcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
