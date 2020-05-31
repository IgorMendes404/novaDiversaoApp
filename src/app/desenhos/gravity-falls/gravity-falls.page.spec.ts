import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GravityFallsPage } from './gravity-falls.page';

describe('GravityFallsPage', () => {
  let component: GravityFallsPage;
  let fixture: ComponentFixture<GravityFallsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GravityFallsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GravityFallsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
