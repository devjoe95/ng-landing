import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {
  filter,
  map,
  mergeMap,
  Observable,
  of,
  pluck,
  switchMap,
  tap,
  toArray,
} from 'rxjs';

interface OpenWeatherResponse {
  city: {
    name: String;
    country: String;
  };
  list: {
    dt_txt: Date;
    main: {
      temp: String;
    };
  }[];
}

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private url = 'https://api.openweathermap.org/data/2.5/forecast';
  private API_KEY = '16616e0047410323cff89b5a58670176';
  constructor(private http: HttpClient) {}

  getForecast() {
    return this.getCurrentLocation().pipe(
      map((coords) => {
        return new HttpParams()
          .set('lat', coords.latitude)
          .set('lon', coords.longitude)
          .set('units', 'metric')
          .set('appid', this.API_KEY);
      }),
      switchMap((params) =>
        this.http.get<OpenWeatherResponse>(this.url, { params })
      ),
      pluck('list'),
      mergeMap((value) => of(...value)),
      filter((_, index) => index % 8 === 0),
      map((value) => {
        return {
          date: value.dt_txt,
          temp: value.main.temp,
        };
      }),
      toArray()
    );
  }
  getCurrentLocation() {
    return new Observable<GeolocationCoordinates>((observer) => {
      window.navigator.geolocation.getCurrentPosition(
        (position) => {
          observer.next(position.coords);
          observer.complete();
        },
        (err) => {
          observer.error(err);
        }
      );
    });
  }
}
