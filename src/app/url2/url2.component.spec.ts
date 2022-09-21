import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Url2Component } from './url2.component';

describe('Url2Component', () => {
  let component: Url2Component;
  let fixture: ComponentFixture<Url2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Url2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Url2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
