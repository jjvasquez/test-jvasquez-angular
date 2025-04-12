// angular import
import { Component, Input } from '@angular/core';

// project import
import { NavigationItem } from 'src/app/theme/types/navigation';

@Component({
  selector: 'app-component-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.scss']
})
export class ComponentCollapseComponent {
  // public props

  // all Version Get Item(Component Name Take)
  @Input() item: NavigationItem;

  windowWidth = window.innerWidth;

  // public method
  navCollapse(e: MouseEvent) {
    let parent = e.target as HTMLElement;
    parent = (parent as HTMLElement).parentElement as HTMLElement;

    const sections = document.querySelectorAll('.coded-hasmenu');
    for (let i = 0; i < sections.length; i++) {
      if (sections[i] !== parent) {
        sections[i].classList.remove('coded-trigger');
      }
    }
    let first_parent = parent.parentElement;
    let pre_parent = ((parent as HTMLElement).parentElement as HTMLElement).parentElement as HTMLElement;
    if (first_parent?.classList.contains('coded-hasmenu')) {
      do {
        first_parent?.classList.add('coded-trigger');
        first_parent = (((first_parent as HTMLElement).parentElement as HTMLElement).parentElement as HTMLElement)
          .parentElement as HTMLElement;
      } while (first_parent?.classList.contains('coded-hasmenu'));
    } else if (pre_parent.classList.contains('coded-submenu')) {
      do {
        pre_parent?.parentElement?.classList.add('coded-trigger');
        pre_parent = (((pre_parent as HTMLElement).parentElement as HTMLElement).parentElement as HTMLElement).parentElement as HTMLElement;
      } while (pre_parent.classList.contains('coded-submenu'));
    }
    parent.classList.toggle('coded-trigger');
  }
}
