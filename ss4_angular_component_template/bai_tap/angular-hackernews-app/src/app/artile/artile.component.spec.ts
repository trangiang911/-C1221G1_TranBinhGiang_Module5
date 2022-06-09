import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtileComponent } from './artile.component';

describe('ArtileComponent', () => {
  let component: ArtileComponent;
  let fixture: ComponentFixture<ArtileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
