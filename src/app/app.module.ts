import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WeeklyMenuComponent } from './weekly-menu/weekly-menu.component';
import { RecipeComponent } from './recipe/recipe.component';
import { TakePipe } from './take.pipe';
import { DayOfWeekPipe } from './day-of-week.pipe';
import { ImagePipe } from './image.pipe';
import {RecipeService} from './recipe.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WeeklyMenuComponent,
    RecipeComponent,
    TakePipe,
    DayOfWeekPipe,
    ImagePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [RecipeService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
