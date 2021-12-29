import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlstylesComponent } from './htmlstyles.component';

describe('HtmlstylesComponent', () => {
  let component: HtmlstylesComponent;
  let fixture: ComponentFixture<HtmlstylesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlstylesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlstylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
