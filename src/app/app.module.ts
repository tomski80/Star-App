import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StarsComponent } from './stars/stars.component';
import { StarDetailComponent } from './star-detail/star-detail.component';
import { StarsService } from './stars.service';
import { AppRoutingModule } from './/app-routing.module';
import { PlanetsComponent } from './planets/planets.component';
import { RadiiToKmPipe } from './solar-radi-to-km.pipe';
import { KelvinToCelsiusPipe } from './kelvin-to-celsius.pipe';
import { ParsecToLightYearPipe } from './parsec-to-light-year.pipe';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { DetailsComponent } from './details/details.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';


@NgModule({
  declarations: [
    AppComponent,
    StarsComponent,
    StarDetailComponent,
    PlanetsComponent,
    RadiiToKmPipe,
    KelvinToCelsiusPipe,
    ParsecToLightYearPipe,
    DashboardComponent,
    SearchResultComponent,
    DetailsComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [StarsService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
