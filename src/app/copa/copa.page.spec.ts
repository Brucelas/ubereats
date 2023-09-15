import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CopaPage } from './copa.page';

describe('CopaPage', () => {
  let component: CopaPage;
  let fixture: ComponentFixture<CopaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CopaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
