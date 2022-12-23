import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  gamesAll: any;

  constructor(private service: ServiceService) { }

  ngOnInit(): void {

    this.service.getGames().subscribe(
      res => this.gamesAll = res
    )
  }

}
