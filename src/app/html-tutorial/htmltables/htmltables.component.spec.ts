import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmltablesComponent } from './htmltables.component';

describe('HtmltablesComponent', () => {
  let component: HtmltablesComponent;
  let fixture: ComponentFixture<HtmltablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmltablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmltablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
