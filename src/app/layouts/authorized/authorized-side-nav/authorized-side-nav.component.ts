import { Component, OnInit } from '@angular/core';
import { AuthorizedSideNavService } from '../services/authorized-side-nav.service';

@Component({
  selector: 'app-authorized-side-nav',
  templateUrl: './authorized-side-nav.component.html',
  styleUrls: ['./authorized-side-nav.component.scss']
})
export class AuthorizedSideNavComponent implements OnInit {

  constructor(public sideNavService: AuthorizedSideNavService) { }

  ngOnInit() {
  }

}
