// angular import
import { Component, OnInit } from '@angular/core';

// project import
import { ThemeLayoutService } from '../../../services/theme-layout.service';
import { HORIZONTAL, VERTICAL, COMPACT } from '../../../const'

@Component({
  selector: 'app-nav-left',
  templateUrl: './toolbar-left.component.html',
  styleUrls: ['./toolbar-left.component.scss']
})
export class NavLeftComponent implements OnInit {
  showToggleMenu: boolean = true;
  // constructor
  constructor(private layoutService: ThemeLayoutService) {}

  ngOnInit() {
    this.layoutService.layout.subscribe((res) => {
      if (res === VERTICAL) {
        this.showToggleMenu = true;
      }
      if (res == HORIZONTAL) {
        this.showToggleMenu = false;
      }
      if (res === COMPACT) {
        this.showToggleMenu = true;
      }
    });
  }

  // public method
  toggleMenu() {
    this.layoutService.toggleSideDrawer();
  }
}
