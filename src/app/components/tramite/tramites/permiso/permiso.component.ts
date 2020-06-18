import { Component, OnInit, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

export interface PeriodicElement {
  IdPers: string;
  horaPerm: number;
  minutoPerm: number;
  fechPerm: string;
  obsePerm: string;
  motiPerm: string;
  docuPerm: File;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {IdPers: '31254532', horaPerm: 1, minutoPerm: 30, fechPerm: new Date("2019-06-15").toDateString() , obsePerm: 'Sin Observaciones', motiPerm: 'Salud', docuPerm: null},
  {IdPers: '52455623', horaPerm: 0, minutoPerm: 30, fechPerm: new Date("2019-05-31").toDateString() , obsePerm: 'Sin Observaciones', motiPerm: 'Salud', docuPerm: null},
  {IdPers: '20125545', horaPerm: 2, minutoPerm: 0, fechPerm: new Date("2019-05-10").toDateString() , obsePerm: 'Sin Observaciones', motiPerm: 'Salud', docuPerm: null},
  {IdPers: '86325015', horaPerm: 3, minutoPerm: 30, fechPerm: new Date("2019-06-06").toDateString() , obsePerm: 'Sin Observaciones', motiPerm: 'Salud', docuPerm: null},
  {IdPers: '98753210', horaPerm: 2, minutoPerm: 15, fechPerm: new Date("2019-06-01").toDateString() , obsePerm: 'Sin Observaciones', motiPerm: 'Salud', docuPerm: null},
  {IdPers: '52015244', horaPerm: 1, minutoPerm: 45, fechPerm: new Date("2019-06-12").toDateString() , obsePerm: 'Sin Observaciones', motiPerm: 'Salud', docuPerm: null},
];

@Component({
  selector: 'app-permiso',
  templateUrl: './permiso.component.html',
  styleUrls: ['./permiso.component.css']
})
export class PermisoComponent implements OnInit {

  displayedColumns: string[]  = ['IdPers', 'horaPerm', 'minutoPerm', 'fechPerm', 'obsePerm', 'motiPerm', 'docuPerm', 'ACTION'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
