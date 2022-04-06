import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalNewsComponent } from './global-news.component';

describe('GlobalNewsComponent', () => {
  let component: GlobalNewsComponent;
  let fixture: ComponentFixture<GlobalNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
