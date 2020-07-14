import { Component, OnInit, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Permiso } from 'src/app/models/permiso';
import { PermisoService } from 'src/app/services/tramites/permiso.service';
import { report } from 'process';




@Component({
  selector: 'app-permiso',
  templateUrl: './permiso.component.html',
  styleUrls: ['./permiso.component.css']
})
export class PermisoComponent implements OnInit {
  ELEMENT_DATA : Permiso[];
  displayedColumns: string[]  = ['IdPers', 'horaPerm', 'minutoPerm', 'fechPerm', 'obsePerm', 'motiPerm', 'docuPerm', 'ACTION'];
  dataSource = new MatTableDataSource<Permiso>(this.ELEMENT_DATA);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private perm:PermisoService) { }

  ngOnInit(): void {
    this.obpermi();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

public obpermi(){
  let per = this.perm.obper();
  per.subscribe(
    report=>this.dataSource.data=report as Permiso[]
  );
}

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
