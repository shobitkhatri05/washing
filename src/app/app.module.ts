import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { BookComponent } from './book/book.component';
import { FooterComponent } from './footer/footer.component';

import { ConceptComponent } from './concept/concept.component';
import { WhysuperComponent } from './whysuper/whysuper.component';
import { KeybenefitComponent } from './keybenefit/keybenefit.component';
import { BlogComponent } from './blog/blog.component';
import { CleaningprocessComponent } from './cleaningprocess/cleaningprocess.component';
import { CarwashprogramComponent } from './carwashprogram/carwashprogram.component';
import { SliderComponent } from './slider/slider.component';
import { TeamComponent } from './team/team.component';
import { OptiComponent } from './opti/opti.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    BookComponent,
    FooterComponent,
    ConceptComponent,
    WhysuperComponent,
    KeybenefitComponent,
    BlogComponent,
    CleaningprocessComponent,
    CarwashprogramComponent,
    SliderComponent,
    TeamComponent,
    OptiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
