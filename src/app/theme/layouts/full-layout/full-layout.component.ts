// Angular import
import { Component, OnInit, ViewChild } from '@angular/core';






import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-full-layout',
  standalone: true,
  imports: [CommonModule,RouterOutlet],
  templateUrl: './full-layout.component.html',
  styleUrl: './full-layout.component.scss'
})
export class FullLayoutComponent {

}
