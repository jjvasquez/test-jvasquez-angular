// angular import
import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';

// project import

import { SharedModule } from '../../../shared/shared/shared.module';
import { AbleProConfig } from '../../../app-config';
import { ThemeLayoutService } from '../../services/theme-layout.service';
import { HORIZONTAL, VERTICAL, COMPACT, RTL, LTR } from '../../const';


@Component({
  selector: 'app-configuration',
  standalone: true,
  imports: [CommonModule ,SharedModule],
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent  {

  // public props
  styleSelectorToggle!: boolean; // open configuration menu
  layoutType!: string; // layouts type
  layout!: string; // vertical, horizontal, compact
  bodyColor!: string; // theme color
  contrast!: boolean; // theme contrast
  caption!: boolean; // menu title hide
  rtlLayout!: boolean; // rtl theme
  boxLayouts!: boolean; // content is box-container
  resetLayoutType!: string; // reset layouts

  // constructor
  constructor(
    private renderer: Renderer2,
    private theme: ThemeLayoutService,
    private layoutService: ThemeLayoutService
  ) {}

  // life cycle event
  ngOnInit() {
    this.layout = AbleProConfig.layout;
    this.setMenuOrientation(this.layout);
    this.layoutType = AbleProConfig.layout_type;
    this.SetLayouts(this.layoutType);
    this.bodyColor = AbleProConfig.theme_color;
    this.SetBodyColor(this.bodyColor);
    this.contrast = AbleProConfig.theme_contrast;
    this.setThemeContrast(this.contrast);
    this.caption = AbleProConfig.menu_caption;
    this.setMenuCaption(this.caption);
    this.rtlLayout = AbleProConfig.isRtlLayout;
    this.setRtlLayout(this.rtlLayout);
    this.boxLayouts = AbleProConfig.isBox_container;
    this.setBoxLayouts(this.boxLayouts);
  }

  // public method

  // Reset Layouts
  setResetLayout(layout: string) {
    if (layout === 'reset') {
      this.ngOnInit();
    }
  }

  // customs layouts
  removeAllLayouts() {
    const layouts = ['light-mode', 'dark-mode'];
    layouts.forEach((layout) => {
      this.renderer.removeClass(document.body, layout);
      document.querySelector('.auto-button')?.classList.remove('active');
    });
  }

  SetLayouts(layout: string) {
    this.layoutType = layout;
    this.removeAllLayouts();
    this.renderer.addClass(document.body, layout);
  }

  layout_change_default(layout: string) {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      layout = 'dark-mode';
    } else {
      layout = 'light-mode';
    }
    this.SetLayouts(layout);
    document.querySelector('.auto-button')?.classList.add('active');
  }

  // customs theme
  removeAllThemes() {
    const themes = [
      'blue-theme',
      'indigo-theme',
      'purple-theme',
      'pink-theme',
      'red-theme',
      'orange-theme',
      'yellow-theme',
      'green-theme',
      'teal-theme',
      'cyan-theme'
    ];
    themes.forEach((theme) => {
      this.renderer.removeClass(document.body, theme);
    });
  }

  SetBodyColor(theme: string) {
    this.bodyColor = theme;
    this.removeAllThemes();
    this.renderer.addClass(document.body, theme);
    this.theme.color.next(theme);
  }

  // theme body menu and header background color change
  setThemeContrast(contrast: boolean) {
    if (contrast) {
      this.renderer.addClass(document.body, 'theme-contrast');
      this.contrast = true;
    } else {
      this.renderer.removeClass(document.body, 'theme-contrast');
      this.contrast = false;
    }
  }

  // menu title hide and show
  setMenuCaption(caption: boolean) {
    if (caption) {
      document.querySelector('.pc-sidebar')?.classList.add('caption-hide');
      this.caption = true;
    } else {
      document.querySelector('.pc-sidebar')?.classList.remove('caption-hide');
      this.caption = false;
    }
  }

  // box container layouts
  setBoxLayouts(boxLayouts: boolean) {
    if (boxLayouts) {
      document.querySelector('.app-container')?.classList.add('container');
      this.boxLayouts = true;
    } else {
      document.querySelector('.app-container')?.classList.remove('container');
      this.boxLayouts = false;
    }
  }

  // rtl theme layout
  setRtlLayout(rtl: boolean) {
    if (rtl) {
      this.renderer.addClass(document.body, '-rtl');
      this.rtlLayout = true;
      this.layoutService.directionChange.next(RTL);
    } else {
      this.renderer.removeClass(document.body, '-rtl');
      this.rtlLayout = false;
      this.layoutService.directionChange.next(LTR);
    }
  }

  setMenuOrientation(layout: string) {
    this.layout = layout;
    document.querySelector('.pc-sidebar')?.classList.remove(HORIZONTAL);
    document.querySelector('.pc-sidebar')?.classList.remove(COMPACT);
    document.querySelector('.pc-sidebar')?.classList.remove(VERTICAL);
    document.querySelector('.pc-sidebar')?.classList.add(layout);
    this.theme.layout.next(layout);
  }
 
}
