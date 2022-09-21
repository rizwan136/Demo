import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Url1Component } from './url1.component';

describe('Url1Component', () => {
  let component: Url1Component;
  let fixture: ComponentFixture<Url1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Url1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Url1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
