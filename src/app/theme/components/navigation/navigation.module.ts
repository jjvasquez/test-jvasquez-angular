// angular import
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// project import
import { ComponentItemComponent } from './item/item.component';
import { ComponentCollapseComponent } from './collapse/collapse.component';
import { ComponentGroupComponent } from './group/group.component';
import { ComponentNavigationComponent } from './navigation.component';
import { SharedModule } from '../../../shared/shared/shared.module';
import { BreadcrumbComponent } from '../../layouts/breadcrumb/breadcrumb.component';
import { SearchFilterPipe } from '../../services/search-filter.pipe';

@NgModule({
  declarations: [
    ComponentNavigationComponent,
    ComponentCollapseComponent,
    ComponentGroupComponent,
    ComponentItemComponent,
    SearchFilterPipe
  ],
  imports: [CommonModule, RouterModule, SharedModule, BreadcrumbComponent],
  exports: [ComponentNavigationComponent]
})
export class ComponentNavigationModule {}
