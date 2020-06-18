import { Component, OnInit, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

export interface PeriodicElement {
  IdPers: string;
  tipoLice: string;
  motiLice: string;
  fechInicLice: string;
  fechFinLice: string;
  obseLice: string;
  docuLice: File;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {IdPers: '31254532', tipoLice: 'Tipo 1', motiLice: 'Embarazo', fechInicLice: new Date("2019-06-15").toDateString() , fechFinLice: new Date("2019-06-20").toDateString(), obseLice: 'Sin Observacion', docuLice: null},
  {IdPers: '21655215', tipoLice: 'Tipo 2', motiLice: 'Externo', fechInicLice: new Date("2019-06-15").toDateString() , fechFinLice: new Date("2019-07-15").toDateString(), obseLice: 'Sin Observacion', docuLice: null},
  {IdPers: '75426532', tipoLice: 'Tipo 3', motiLice: 'Salud', fechInicLice: new Date("2019-06-15").toDateString() , fechFinLice: new Date("2019-08-15").toDateString(), obseLice: 'Sin Observacion', docuLice: null},
  {IdPers: '79652652', tipoLice: 'Tipo 1', motiLice: 'Embarazo', fechInicLice: new Date("2019-06-15").toDateString() , fechFinLice: new Date("2019-10-15").toDateString(), obseLice: 'Sin Observacion', docuLice: null},
  {IdPers: '32566523', tipoLice: 'Tipo 3', motiLice: 'Salud', fechInicLice: new Date("2019-06-15").toDateString() , fechFinLice: new Date("2019-07-15").toDateString(), obseLice: 'Sin Observacion', docuLice: null},
  {IdPers: '45621254', tipoLice: 'Tipo 1', motiLice: 'Embarazo', fechInicLice: new Date("2019-06-15").toDateString() , fechFinLice: new Date("2019-09-15").toDateString(), obseLice: 'Sin Observacion', docuLice: null},
];

@Component({
  selector: 'app-licencia',
  templateUrl: './licencia.component.html',
  styleUrls: ['./licencia.component.css']
})
export class LicenciaComponent implements OnInit {

  displayedColumns: string[]  = ['IdPers', 'tipoLice', 'motiLice', 'fechInicLice', 'fechFinLice', 'obseLice', 'docuLice', 'ACTION'];
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
