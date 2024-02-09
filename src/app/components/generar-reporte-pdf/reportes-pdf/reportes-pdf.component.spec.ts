import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportesPDFComponent } from './reportes-pdf.component';

describe('ReportesPDFComponent', () => {
  let component: ReportesPDFComponent;
  let fixture: ComponentFixture<ReportesPDFComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReportesPDFComponent],
    });
    fixture = TestBed.createComponent(ReportesPDFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
