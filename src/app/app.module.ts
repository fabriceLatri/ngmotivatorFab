import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// firebase
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// services
import { QuotesService } from './services/quotes.service';

// custom components
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { CreateQuoteComponent } from './create-quote/create-quote.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component'; 
import { BackendHomeComponent } from './backend/backend-home/backend-home.component';
import { BackendQuotesComponent } from './backend/backend-quotes/backend-quotes.component';



const CONFIG: FirebaseAppConfig = {
  apiKey: "AIzaSyBwmj6UOIgAR8qhyfswOZuGh0tt8H4H4cY",
  authDomain: "motivator-8369d.firebaseapp.com",
  databaseURL: "https://motivator-8369d.firebaseio.com",
  projectId: "motivator-8369d",
  storageBucket: "motivator-8369d.appspot.com",
  messagingSenderId: "243982329725",
}; 

const ROUTES: Routes = [
  { path: '', pathMatch: 'full', component: QuoteDetailsComponent },
  { path: 'quote/:id', component: QuoteDetailsComponent },
  { path: 'admin', component: BackendHomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    CreateQuoteComponent,
    QuoteDetailsComponent,
    BackendHomeComponent,
    BackendQuotesComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(CONFIG),
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    QuotesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
