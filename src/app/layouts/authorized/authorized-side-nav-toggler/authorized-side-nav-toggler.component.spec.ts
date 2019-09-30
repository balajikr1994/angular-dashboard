import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizedSideNavTogglerComponent } from './authorized-side-nav-toggler.component';

describe('AuthorizedSideNavTogglerComponent', () => {
  let component: AuthorizedSideNavTogglerComponent;
  let fixture: ComponentFixture<AuthorizedSideNavTogglerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorizedSideNavTogglerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorizedSideNavTogglerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
