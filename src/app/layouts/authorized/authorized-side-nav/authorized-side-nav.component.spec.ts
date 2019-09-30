import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizedSideNavComponent } from './authorized-side-nav.component';

describe('AuthorizedSideNavComponent', () => {
  let component: AuthorizedSideNavComponent;
  let fixture: ComponentFixture<AuthorizedSideNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorizedSideNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorizedSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
