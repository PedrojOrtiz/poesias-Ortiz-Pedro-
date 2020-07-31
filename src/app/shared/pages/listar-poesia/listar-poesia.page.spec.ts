import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListarPoesiaPage } from './listar-poesia.page';

describe('ListarPoesiaPage', () => {
  let component: ListarPoesiaPage;
  let fixture: ComponentFixture<ListarPoesiaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarPoesiaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListarPoesiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
