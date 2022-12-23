import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  getGames():Observable<any>{
    return this.http.get("https://my-json-server.typicode.com/G4brielBarbosa/angular-psn-store/jogos")
  }
}
