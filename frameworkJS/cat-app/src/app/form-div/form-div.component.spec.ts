import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDivComponent } from './form-div.component';

describe('FormDivComponent', () => {
  let component: FormDivComponent;
  let fixture: ComponentFixture<FormDivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDivComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
