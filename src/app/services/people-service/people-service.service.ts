import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ICharacter } from 'src/app/models/character/character.interface';

@Injectable({
  providedIn: 'root'
})
export class PeopleServiceService {

  private urlAPI = 'https://rickandmortyapi.com/api/character/?page=1'

  constructor(private http: HttpClient) { }

  getCharacter():Observable<ICharacter>{
    return this.http.get<ICharacter>(this.urlAPI)
  }

}
