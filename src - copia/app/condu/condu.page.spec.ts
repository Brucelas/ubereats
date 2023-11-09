import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConduPage } from './condu.page';

describe('ConduPage', () => {
  let component: ConduPage;
  let fixture: ComponentFixture<ConduPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConduPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
