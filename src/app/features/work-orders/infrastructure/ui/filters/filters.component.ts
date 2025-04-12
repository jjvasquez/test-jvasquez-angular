
import {ChangeDetectionStrategy, Component, computed, inject, model, signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CardComponent } from '../../../../../theme/components/card/card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../../../shared/shared/shared.module';


import {LiveAnnouncer} from '@angular/cdk/a11y';
import {COMMA, ENTER} from '@angular/cdk/keycodes';

import {FormsModule} from '@angular/forms';
import {MatAutocompleteModule, MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatChipInputEvent, MatChipsModule} from '@angular/material/chips';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,SharedModule, RouterModule,CardComponent],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss'
})
export class FiltersComponent {


  filtersForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl('')
  })

  filter(){
    
  }

  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  readonly currentFilter = model('');
  readonly filters = signal(['Periodo', 'Centro Servicio', 'Estado', 'Actividad', 'Orden de trabajo','Fecha de Generación','Proveedor','Tipo Cartera']);
  readonly allFilters: string[] = ['Periodo', 'Centro Servicio', 'Estado', 'Actividad', 'Orden de trabajo','Fecha de Generación','Proveedor','Tipo Cartera'];
  readonly filteredFilters = computed(() => {
    const currentFilter = this.currentFilter().toLowerCase();
    return currentFilter
      ? this.allFilters.filter(filter => filter.toLowerCase().includes(currentFilter))
      : this.allFilters.slice();
  });

  readonly announcer = inject(LiveAnnouncer);

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our filter
    if (value) {
      this.filters.update(filters => [...filters, value]);
    }

    // Clear the input value
    this.currentFilter.set('');
  }

  remove(filter: string): void {
    this.filters.update(filters => {
      const index = filters.indexOf(filter);
      if (index < 0) {
        return filters;
      }

      filters.splice(index, 1);
      this.announcer.announce(`Removed ${filter}`);
      return [...filters];
    });
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.filters.update(filters => [...filters, event.option.viewValue]);
    this.currentFilter.set('');
    event.option.deselect();
  }


  find(filterName:string){

  return  this.filters().find((element) => element == filterName) ? true:false;
  }


}
