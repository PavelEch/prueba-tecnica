import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedInicioComponent } from './feed-inicio.component';

describe('FeedInicioComponent', () => {
  let component: FeedInicioComponent;
  let fixture: ComponentFixture<FeedInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedInicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
