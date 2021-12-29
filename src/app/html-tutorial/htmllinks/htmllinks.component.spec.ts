import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmllinksComponent } from './htmllinks.component';

describe('HtmllinksComponent', () => {
  let component: HtmllinksComponent;
  let fixture: ComponentFixture<HtmllinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmllinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmllinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
