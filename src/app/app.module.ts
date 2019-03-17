import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { FantasyDraftComponent } from './fantasy-draft/fantasy-draft.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    FantasyDraftComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
