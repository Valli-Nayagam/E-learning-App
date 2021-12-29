import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlbasicComponent } from './htmlbasic.component';

describe('HtmlbasicComponent', () => {
  let component: HtmlbasicComponent;
  let fixture: ComponentFixture<HtmlbasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlbasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlbasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
