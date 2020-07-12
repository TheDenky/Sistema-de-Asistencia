import { Component, OnInit, ViewChild } from '@angular/core';
import { PersonalService } from '../../services/personal.service';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { concat } from 'rxjs';
import { Personal } from 'src/app/models/personal';
import { report } from 'process';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  ELEMENT_DATA : Personal[];
  displayedColumns: string[]  = ['dniPers', 'nombPers', 'apelPatePers', 'apelMatePers', 'cargPers', 'contLaboPers', 'jornLaboPers', 'ACTION'];
  dataSource = new MatTableDataSource<Personal>(this.ELEMENT_DATA);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private personalService: PersonalService) { }

    unapersona : any = [];
  ngOnInit(): void {
    this.obtenerPersonal();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  public obtenerPersonal(){
    let resp = this.personalService.getPersonal();
    resp.subscribe(report=>this.dataSource.data= report as Personal[]);
  }
  public obtenerUnPersonal(id: string){
    this.personalService.getOnePersonal(id).subscribe(
      res =>{
        console.log(res);
        this.unapersona = res;
      },
      err => console.error(err)
    )
  }
  
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
