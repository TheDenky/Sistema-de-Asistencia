import { Component, OnInit, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

export interface PeriodicElement {
  IdPers: string;
  descJust: string;
  fechJust: string;
  docuJust: File;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {IdPers: '31254532', descJust: 'descripcion de justificacion 1', fechJust: new Date("2019-06-02").toDateString(), docuJust: null},
  {IdPers: '56215642', descJust: 'descripcion de justificacion 2', fechJust: new Date("2020-08-15").toDateString(), docuJust: null},
  {IdPers: '26355256', descJust: 'descripcion de justificacion 3', fechJust: new Date("2019-12-20").toDateString(), docuJust: null},
  {IdPers: '52632562', descJust: 'descripcion de justificacion 4', fechJust: new Date("2020-08-30").toDateString(), docuJust: null},
  {IdPers: '14526685', descJust: 'descripcion de justificacion 5', fechJust: new Date("2019-06-15").toDateString(), docuJust: null},
  {IdPers: '87845212', descJust: 'descripcion de justificacion 6', fechJust: new Date("2019-11-10").toDateString(), docuJust: null},
];

@Component({
  selector: 'app-justificacion',
  templateUrl: './justificacion.component.html',
  styleUrls: ['./justificacion.component.css']
})
export class JustificacionComponent implements OnInit {

  displayedColumns: string[]  = ['IdPers', 'descJust', 'fechJust', 'docuJust', 'ACTION'];
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
