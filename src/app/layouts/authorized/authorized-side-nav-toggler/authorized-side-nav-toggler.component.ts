import { Component, OnInit } from '@angular/core';
import { AuthorizedSideNavService } from '../services/authorized-side-nav.service';

@Component({
  selector: 'app-authorized-side-nav-toggler',
  templateUrl: './authorized-side-nav-toggler.component.html',
  styleUrls: ['./authorized-side-nav-toggler.component.scss']
})
export class AuthorizedSideNavTogglerComponent implements OnInit {
  
  constructor(public sideNavService : AuthorizedSideNavService) { }

  ngOnInit() {
  }

}
