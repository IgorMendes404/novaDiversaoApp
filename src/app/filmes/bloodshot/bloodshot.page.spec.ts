import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BloodshotPage } from './bloodshot.page';

describe('BloodshotPage', () => {
  let component: BloodshotPage;
  let fixture: ComponentFixture<BloodshotPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloodshotPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BloodshotPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
