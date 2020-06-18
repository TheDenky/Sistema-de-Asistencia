import { Component, OnInit, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

export interface PeriodicElement {
  IdPers: string;
  fechInicVaca: string;
  fechFinVaca: string;
  motiVaca: string;
  descVaca: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {IdPers: '31254532', fechInicVaca: new Date("2020-05-10").toDateString(), fechFinVaca: new Date("2020-08-10").toDateString() , motiVaca: 'Vacaciones familiares', descVaca: 'Aqui una descripcion'},
  {IdPers: '52645212', fechInicVaca: new Date("2020-04-15").toDateString(), fechFinVaca: new Date("2020-09-22").toDateString() , motiVaca: 'Vacaciones familiares', descVaca: 'Aqui una descripcion'},
  {IdPers: '85623145', fechInicVaca: new Date("2020-05-18").toDateString(), fechFinVaca: new Date("2020-10-10").toDateString() , motiVaca: 'Vacaciones familiares', descVaca: 'Aqui una descripcion'},
  {IdPers: '84562231', fechInicVaca: new Date("2020-06-02").toDateString(), fechFinVaca: new Date("2020-12-25").toDateString() , motiVaca: 'Vacaciones familiares', descVaca: 'Aqui una descripcion'},
  {IdPers: '95632556', fechInicVaca: new Date("2020-06-30").toDateString(), fechFinVaca: new Date("2020-12-09").toDateString() , motiVaca: 'Vacaciones familiares', descVaca: 'Aqui una descripcion'},
  {IdPers: '12022055', fechInicVaca: new Date("2020-03-22").toDateString(), fechFinVaca: new Date("2020-11-01").toDateString() , motiVaca: 'Vacaciones familiares', descVaca: 'Aqui una descripcion'},
];

@Component({
  selector: 'app-vacaciones',
  templateUrl: './vacaciones.component.html',
  styleUrls: ['./vacaciones.component.css']
})
export class VacacionesComponent implements OnInit {

  displayedColumns: string[]  = ['IdPers', 'fechInicVaca', 'fechFinVaca', 'motiVaca', 'descVaca', 'ACTION'];
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
