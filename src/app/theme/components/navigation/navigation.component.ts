// angular import
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NavigationItem } from '../../types/navigation';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatDrawer, MatDrawerMode } from '@angular/material/sidenav';
import { ThemeLayoutService } from '../../services/theme-layout.service';
import { MIN_WIDTH_1025PX, MAX_WIDTH_1024PX } from 'src/app/theme/const';

@Component({
  selector: 'app-component-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class ComponentNavigationComponent implements OnInit {
  // public props
  @Input() menus: NavigationItem[];
  @ViewChild('menuSide') menuSide: MatDrawer;

  windowWidth = window.innerWidth;
  modeValue: MatDrawerMode = 'side';
  searchMenus: string;

  // constructor
  constructor(
    private breakpointObserver: BreakpointObserver,
    private layoutService: ThemeLayoutService
  ) {}

  // life cycle event
  ngOnInit() {
    this.breakpointObserver.observe([MIN_WIDTH_1025PX, MAX_WIDTH_1024PX]).subscribe((result) => {
      if (result.breakpoints['(max-width: 1024.98px)']) {
        this.modeValue = 'over';
        (document.querySelector('#nav-ps-') as HTMLElement).style.height = 'calc(100vh - 163px)';
      } else if (result.breakpoints[MIN_WIDTH_1025PX]) {
        this.modeValue = 'side';
        this.menuSide?.open();
      }
    });

    this.layoutService.componentMenuState.subscribe(() => {
      this.menuSide.toggle();
    });
  }

  // public method
  toggleMenu() {
    this.layoutService.toggleMenuSide();
  }
}
