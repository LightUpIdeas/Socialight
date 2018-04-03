import { Component, OnInit } from '@angular/core';
import { SidebarNavItem } from '../sidebar-nav-item';
import { AlertService, RequestService } from '../_services/index';

import { ITEMS } from '../mock-navitems';


@Component({
  selector: 'app-sidebar-nav',
  templateUrl: './sidebar-nav.component.html',
  styleUrls: ['./sidebar-nav.component.scss']
})
export class SidebarNavComponent implements OnInit {

  items = ITEMS;
  constructor(public requestService: RequestService) {
    
  }

  ngOnInit() {
  }
}
