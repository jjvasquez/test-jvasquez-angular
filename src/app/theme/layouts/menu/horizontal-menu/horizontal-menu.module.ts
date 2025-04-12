// Angular import
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// project import
import { HorizontalMenuComponent } from './horizontal-menu.component';
import { MenuCollapseComponent } from './menu-collapse/menu-collapse.component';
import { MenuGroupHorizontalComponent } from './menu-group/menu-group.component';
import { MenuItemComponent } from './menu-item/menu-item.component';

@NgModule({
  declarations: [HorizontalMenuComponent, MenuCollapseComponent, MenuGroupHorizontalComponent, MenuItemComponent],
  imports: [CommonModule, RouterModule],
  exports: [HorizontalMenuComponent]
})
export class HorizontalMenuModule {}
