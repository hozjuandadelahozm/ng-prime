import { Component, OnInit } from '@angular/core';
import { IResult } from 'src/app/models/character/character.interface';
import { PeopleServiceService } from '../../services/people-service/people-service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  listCharacters: IResult[]; 
  
  constructor(private peopleService: PeopleServiceService) {
    this.listCharacters = []
  }

  ngOnInit() {
    this.loadCharacter()
  }

  public loadCharacter() {
    this.peopleService.getCharacter().subscribe( data => this.listCharacters = data.results)
  }

}
