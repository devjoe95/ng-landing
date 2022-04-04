import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css'],
})
export class ForecastComponent implements OnInit {
  forecastData: Array<{ date: Date; temp: String }> = [];
  constructor(weatherService: WeatherService) {
    weatherService.getForecast().subscribe((result) => {
      this.forecastData = result;
    });
  }

  ngOnInit(): void {}
}
