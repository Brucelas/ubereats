import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing'; // Importante para páginas de Ionic
import { ConduPage } from './condu.page';

describe('ConduPage', () => {
  let component: ConduPage;
  let fixture: ComponentFixture<ConduPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ConduPage],
      imports: [IonicModule.forRoot(), RouterTestingModule] 
    }).compileComponents();

    fixture = TestBed.createComponent(ConduPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
