import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlheadingComponent } from './htmlheading.component';

describe('HtmlheadingComponent', () => {
  let component: HtmlheadingComponent;
  let fixture: ComponentFixture<HtmlheadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlheadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlheadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
