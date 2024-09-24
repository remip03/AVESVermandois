import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationDHenriComponent } from './creation-dhenri.component';

describe('CreationDHenriComponent', () => {
  let component: CreationDHenriComponent;
  let fixture: ComponentFixture<CreationDHenriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreationDHenriComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreationDHenriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
