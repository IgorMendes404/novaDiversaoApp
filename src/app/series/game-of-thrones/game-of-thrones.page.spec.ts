import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GameOfThronesPage } from './game-of-thrones.page';

describe('GameOfThronesPage', () => {
  let component: GameOfThronesPage;
  let fixture: ComponentFixture<GameOfThronesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameOfThronesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GameOfThronesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
