import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeFCComponent } from './liste-fc.component';

describe('ListeFCComponent', () => {
  let component: ListeFCComponent;
  let fixture: ComponentFixture<ListeFCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeFCComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeFCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
