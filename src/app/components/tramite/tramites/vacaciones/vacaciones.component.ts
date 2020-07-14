import { Component, OnInit, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Vacaciones } from 'src/app/models/vacaciones';
import { VacacionService } from 'src/app/services/tramites/vacacion.service';
import { report } from 'process';




@Component({
  selector: 'app-vacaciones',
  templateUrl: './vacaciones.component.html',
  styleUrls: ['./vacaciones.component.css']
})
export class VacacionesComponent implements OnInit {
  ELEMENT_DATA: Vacaciones[];
  displayedColumns: string[]  = ['IdPers', 'fechInicVaca', 'fechFinVaca', 'motiVaca', 'descVaca', 'ACTION'];
  dataSource = new MatTableDataSource<Vacaciones>(this.ELEMENT_DATA);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private vacas:VacacionService) { }

  ngOnInit(): void {
    this.obtenvaca();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
public obtenvaca(){
  let vaca = this.vacas.vaca();
  vaca.subscribe(
    report=>this.dataSource.data=report as Vacaciones[]
  );
}

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
