import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {

  cityList = [
  	{city_name:"Aguascalientes", "state_name": "Aguascalientes"},
  	{city_name:"Cuernavaca", "state_name": "Morelos"},
  	{city_name:"Queretaro", "state_name": "Queretaro"},
  	{city_name:"CDMX", "state_name": "CDMX"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
