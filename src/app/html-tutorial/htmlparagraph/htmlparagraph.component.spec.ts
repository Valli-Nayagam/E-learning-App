import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlparagraphComponent } from './htmlparagraph.component';

describe('HtmlparagraphComponent', () => {
  let component: HtmlparagraphComponent;
  let fixture: ComponentFixture<HtmlparagraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlparagraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlparagraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
