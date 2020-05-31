import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ScoobyPage } from './scooby.page';

describe('ScoobyPage', () => {
  let component: ScoobyPage;
  let fixture: ComponentFixture<ScoobyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoobyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ScoobyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
