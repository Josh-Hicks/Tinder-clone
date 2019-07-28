import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DislikesComponent } from './dislikes.component';

describe('DislikesComponent', () => {
  let component: DislikesComponent;
  let fixture: ComponentFixture<DislikesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DislikesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DislikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
