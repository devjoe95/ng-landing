import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForecastComponent } from './forecast/forecast.component';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [ForecastComponent],
  imports: [CommonModule, MatListModule],
  exports: [ForecastComponent],
})
export class WeatherModule {}
