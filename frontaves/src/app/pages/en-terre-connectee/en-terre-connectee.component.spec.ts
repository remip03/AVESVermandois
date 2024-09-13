import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnTerreConnecteeComponent } from './en-terre-connectee.component';

describe('EnTerreConnecteeComponent', () => {
  let component: EnTerreConnecteeComponent;
  let fixture: ComponentFixture<EnTerreConnecteeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnTerreConnecteeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnTerreConnecteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
