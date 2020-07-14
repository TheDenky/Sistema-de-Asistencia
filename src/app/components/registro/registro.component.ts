import { Component, OnInit } from '@angular/core';
import { RegistroService } from 'src/app/services/registro.service';
import { Personal } from 'src/app/models/personal';
import { PersonalService } from 'src/app/services/personal.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  registro : any = [];

  constructor(private perso:PersonalService) { }

  ngOnInit(): void {
    
    this.perso.getPersonal().subscribe(
      res =>{
        this.registro = res;
      },
      err => console.error(err)
    );

  }
  public obreg(){
    

  }

}
