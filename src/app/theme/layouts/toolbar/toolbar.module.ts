// angular import
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// project import
import { NavBarComponent } from './toolbar.component';
import { NavLeftComponent } from './toolbar-left/toolbar-left.component';
import { NavRightComponent } from './toolbar-right/toolbar-right.component';
import { SharedModule } from '../../../shared/shared/shared.module';
@NgModule({
  declarations: [NavBarComponent, NavLeftComponent, NavRightComponent],
  imports: [CommonModule, SharedModule],
  exports: [NavBarComponent]
})
export class NavBarModule {}
