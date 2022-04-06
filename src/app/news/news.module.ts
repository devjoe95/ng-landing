import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsTapComponent } from './news-tap/news-tap.component';
import { MatTabsModule } from '@angular/material/tabs';
import { GlobalNewsComponent } from './global-news/global-news.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [NewsTapComponent, GlobalNewsComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    SharedModule,
  ],

  exports: [NewsTapComponent],
})
export class NewsModule {}
