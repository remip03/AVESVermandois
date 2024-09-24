import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFeLComponent } from './update-fe-l.component';

describe('UpdateFeLComponent', () => {
  let component: UpdateFeLComponent;
  let fixture: ComponentFixture<UpdateFeLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateFeLComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateFeLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
