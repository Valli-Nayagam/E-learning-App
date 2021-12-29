import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlclasesComponent } from './htmlclases.component';

describe('HtmlclasesComponent', () => {
  let component: HtmlclasesComponent;
  let fixture: ComponentFixture<HtmlclasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlclasesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlclasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
