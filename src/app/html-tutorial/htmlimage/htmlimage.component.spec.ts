import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlimageComponent } from './htmlimage.component';

describe('HtmlimageComponent', () => {
  let component: HtmlimageComponent;
  let fixture: ComponentFixture<HtmlimageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlimageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
