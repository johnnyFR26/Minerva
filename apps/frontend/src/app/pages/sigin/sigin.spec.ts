import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sigin } from './sigin';

describe('Sigin', () => {
  let component: Sigin;
  let fixture: ComponentFixture<Sigin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sigin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sigin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
