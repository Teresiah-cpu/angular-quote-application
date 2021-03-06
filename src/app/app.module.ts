import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HighlightDirective } from './highlight.directive';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { VotesComponent } from './votes/votes.component';
import { CountDatePipe } from './count-date.pipe';


@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    NavbarComponent,
    HighlightDirective,
    FormComponent,
    VotesComponent,
    CountDatePipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
