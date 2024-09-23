import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFeLComponent } from './create-fe-l.component';

describe('CreateFeLComponent', () => {
  let component: CreateFeLComponent;
  let fixture: ComponentFixture<CreateFeLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateFeLComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateFeLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
