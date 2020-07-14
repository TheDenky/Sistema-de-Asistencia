import { Component, OnInit, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Justificacion } from 'src/app/models/justificacion';
import { JustificacionService } from 'src/app/services/tramites/justificacion.service';
import { report } from 'process';

  


@Component({
  selector: 'app-justificacion',
  templateUrl: './justificacion.component.html',
  styleUrls: ['./justificacion.component.css']
})
export class JustificacionComponent implements OnInit {
ELEMENT_DATA : Justificacion[];
  displayedColumns: string[]  = ['dnipers', 'decrpJust', 'fechJust', 'docuJust', 'ACTION'];
  dataSource = new MatTableDataSource<Justificacion>(this.ELEMENT_DATA);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private Just:JustificacionService) { }

  ngOnInit(): void {
    this.objust();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  public objust(){
    let just=this.Just.getjusti();
    just.subscribe(
      report=>this.dataSource.data = report as Justificacion[]
    );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
