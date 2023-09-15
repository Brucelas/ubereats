import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PasaPage } from './pasa.page';

describe('PasaPage', () => {
  let component: PasaPage;
  let fixture: ComponentFixture<PasaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PasaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
