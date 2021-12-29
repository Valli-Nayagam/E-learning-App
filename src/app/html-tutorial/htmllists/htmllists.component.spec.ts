import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmllistsComponent } from './htmllists.component';

describe('HtmllistsComponent', () => {
  let component: HtmllistsComponent;
  let fixture: ComponentFixture<HtmllistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmllistsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmllistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
