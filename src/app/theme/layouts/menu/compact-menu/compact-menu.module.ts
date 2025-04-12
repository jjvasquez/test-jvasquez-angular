import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompactMenuComponent } from './compact-menu.component';
import { SharedModule } from '../../../../shared/shared/shared.module';
import { RouterModule } from '@angular/router';
import { MenuCollapseCompactComponent } from './menu-collapse/menu-collapse.component';
import { MenuGroupCompactComponent } from './menu-group/menu-group.component';
import { MenuItemCompactComponent } from './menu-item/menu-item.component';

@NgModule({
  declarations: [CompactMenuComponent, MenuCollapseCompactComponent, MenuGroupCompactComponent, MenuItemCompactComponent],
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [CompactMenuComponent]
})
export class CompactMenuModule {}
