import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WeeklyMenuComponent } from './weekly-menu/weekly-menu.component';
import { RecipeComponent } from './recipe/recipe.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'recipe/:id', component: RecipeComponent},
  {path: 'weekly-menu', component: WeeklyMenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
