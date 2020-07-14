import { Component, OnInit, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Licencia } from 'src/app/models/licencia';
import { LicenciaService } from 'src/app/services/tramites/licencia.service';
import { report } from 'process';
import { Personal } from 'src/app/models/personal';




@Component({
  selector: 'app-licencia',
  templateUrl: './licencia.component.html',
  styleUrls: ['./licencia.component.css']
})
export class LicenciaComponent implements OnInit {
  ELEMENT_DATA : Licencia[];
  
  displayedColumns: string[]  = ['dnipers', 'tipoLice', 'motiLice', 'fechInicLice', 'fechFinLice', 'obseLice', 'docuLice', 'ACTION'];
  dataSource = new MatTableDataSource<Licencia>(this.ELEMENT_DATA);
 
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private Lice:LicenciaService) { }

  ngOnInit(): void {
    this.licencia();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  public licencia(){
    let licencia = this.Lice.getLice();
    

    licencia.subscribe(report=>this.dataSource.data=report as Licencia[]);
    

  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
