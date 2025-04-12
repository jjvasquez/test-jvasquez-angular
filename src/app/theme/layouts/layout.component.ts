// Angular import
import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatDrawer, MatDrawerMode } from '@angular/material/sidenav';
import { ChangeDetectorRef } from '@angular/core';

// Project import
import { AbleProConfig } from '../../app-config';
import { menus } from '../../shared/data/menu';
import { ThemeLayoutService } from '../../theme/services/theme-layout.service';
import { MIN_WIDTH_1025PX, MAX_WIDTH_1024PX, VERTICAL, HORIZONTAL, COMPACT, RTL, LTR } from '../../theme/const';
import { NavBarModule } from '../../theme/layouts/toolbar/toolbar.module';
import { SharedModule } from '../../shared/shared/shared.module';
import { VerticalMenuModule } from '../../theme/layouts/menu/vertical-menu/vertical-menu.module';
import { HorizontalMenuModule } from '../../theme/layouts/menu/horizontal-menu/horizontal-menu.module';
import { CompactMenuModule } from '../../theme/layouts/menu/compact-menu';
import { BreadcrumbComponent } from '../../theme/layouts/breadcrumb/breadcrumb.component';
import { ConfigurationComponent } from '../../theme/layouts/configuration/configuration.component';
import { FooterComponent } from '../../theme/layouts/footer/footer.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule,RouterOutlet,SharedModule,VerticalMenuModule,NavBarModule,CompactMenuModule,BreadcrumbComponent,FooterComponent,ConfigurationComponent,HorizontalMenuModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent  implements OnInit {
  @ViewChild('sidebar')
  sidebar!: MatDrawer;
  menus = menus;
  modeValue: MatDrawerMode = 'side';
  direction!: any;
 
  currentLayout: string;
  currentUser: any;
  currentBusinessUnit: any;
  rtlMode: boolean;
  windowWidth: number;

  // Constructor
  constructor(
    private breakpointObserver: BreakpointObserver,
    private layoutService: ThemeLayoutService,
    private cdr: ChangeDetectorRef
  ) {
    this.currentLayout = AbleProConfig.layout;
    this.rtlMode = AbleProConfig.isRtlLayout;
    this.windowWidth = window.innerWidth;
  }
  // life cycle event
  ngOnInit() {


    /**
     * Dashboard menu sidebar toggle listener
     */
    this.layoutService.dashBoardMenuState.subscribe(() => {
      this.sidebar.toggle();
    });

    this.manageLayout(this.currentLayout);

    /**
     * Listen to Theme direction change. RTL/LTR
     */
    this.layoutService.directionChange.subscribe((direction: string) => {
      // here direction layout subscribing according on click event in configuration
      this.rtlMode = direction === RTL ? true : false;
      this.manageLayout(this.currentLayout);
    });

    /**
     * Listen to theme layout changes
     */
    this.layoutService.layout.subscribe((layout: string) => {
      // here direction layout subscribing according on click event in configuration
      this.currentLayout = layout;
      this.manageLayout(layout);
    });
  }

  /**
   * Manage layout of theme
   */
  private manageLayout(layout: string) {
    const drawerContent = document.querySelector('.mat-drawer-content') as HTMLElement;
    if (drawerContent) {
      if (layout === VERTICAL) {
        

        drawerContent.style.marginLeft = this.rtlMode === true ? '0px' : '280px';
        drawerContent.style.marginRight = this.rtlMode === true ? '280px' : '0px';

        this.direction =  this.rtlMode === true ? RTL : LTR;

      }
      this.cdr.markForCheck(); // Notify Angular about the changes
    }
  }

}
