import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlformattingComponent } from './htmlformatting.component';

describe('HtmlformattingComponent', () => {
  let component: HtmlformattingComponent;
  let fixture: ComponentFixture<HtmlformattingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlformattingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlformattingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
