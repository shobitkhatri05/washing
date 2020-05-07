import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookComponent } from './book/book.component';
import { ConceptComponent } from './concept/concept.component';
import { WhysuperComponent } from './whysuper/whysuper.component';
import { TeamComponent } from './team/team.component';
import { KeybenefitComponent } from './keybenefit/keybenefit.component';
import { BlogComponent } from './blog/blog.component';
import { CleaningprocessComponent } from './cleaningprocess/cleaningprocess.component';
import { CarwashprogramComponent } from './carwashprogram/carwashprogram.component';
import { OptiComponent } from './opti/opti.component';



const routes: Routes = [
  {path:'',component:  HomeComponent},
  {path:'book',component:  BookComponent},
  {path:'concept',component:  ConceptComponent},
  {path:'whysuper',component:  WhysuperComponent},
  {path:'team',component:  TeamComponent},
  {path:'keybenefit',component:  KeybenefitComponent},
  {path:'blog',component:  BlogComponent},
  {path:'cleaningprocess',component:CleaningprocessComponent},
  {path:'carwashprogram',component:CarwashprogramComponent},
  {path:'opti',component:OptiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
