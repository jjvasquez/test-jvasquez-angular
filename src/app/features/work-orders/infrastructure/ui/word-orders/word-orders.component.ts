// angular import
import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { SharedModule } from '../../../../../shared/shared/shared.module';
import { WorkOrder } from '../../../domain/models/work-order.model';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { FiltersComponent } from '../filters/filters.component';
import { Routes, RouterModule } from '@angular/router';
import { WorkOrderRepository } from '../../../infrastructure/repositories/work-order.repository';



@Component({
  selector: 'app-word-orders',
  standalone: true,
  imports: [SharedModule, CommonModule,RouterModule, MatTable, MatPaginator,MatSort,MatSortModule,FiltersComponent],
  templateUrl: './word-orders.component.html',
  styleUrl: './word-orders.component.scss',
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
    ])
  ]
})


export class WordOrdersComponent implements OnInit,AfterViewInit  {

  dataSource!: MatTableDataSource<WorkOrder, MatPaginator>;
  displayedColumns: string[] = [
    "userId",
    "id",
    "title",
    "body"
    
  ];
  
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild(MatPaginator)  paginator!: MatPaginator;

  constructor(private workOrderRepository: WorkOrderRepository) {}

  ngOnInit() {
    this.workOrderRepository.getAllWithDebounce().subscribe((response: any) => {

      let data = response;
      if (Array.isArray(data)) {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      } else {
        console.error('Data is not an array:', data);
      }
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


}
