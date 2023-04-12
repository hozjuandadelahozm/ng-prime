import { Component, OnInit } from '@angular/core';
import { IResult } from 'src/app/models/character/character.interface';
import { PeopleServiceService } from '../../services/people-service/people-service.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  listCharacters: IResult[]; 

  cols: any[];

  constructor(private PeopleService: PeopleServiceService) { 
    this.listCharacters = []
    this.cols = []
  }

  ngOnInit(): void {
    this.PeopleService.getCharacter().subscribe( data => this.listCharacters = data.results);

    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'name', header: 'Nombre' },
      { field: 'status', header: 'Estado' },
      { field: 'species', header: 'Especies' },
      { field: 'gender', header: 'Genero' },
    ];
  }

}
