import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RickAndMortyPage } from './rick-and-morty.page';

describe('RickAndMortyPage', () => {
  let component: RickAndMortyPage;
  let fixture: ComponentFixture<RickAndMortyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RickAndMortyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RickAndMortyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
