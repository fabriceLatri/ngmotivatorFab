import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// firebase
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// custom components
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
 
// services
import { QuotesService } from './services/quotes.service';
import { CreateQuoteComponent } from './create-quote/create-quote.component';

const CONFIG: FirebaseAppConfig = {
  apiKey: "AIzaSyBwmj6UOIgAR8qhyfswOZuGh0tt8H4H4cY",
  authDomain: "motivator-8369d.firebaseapp.com",
  databaseURL: "https://motivator-8369d.firebaseio.com",
  projectId: "motivator-8369d",
  storageBucket: "motivator-8369d.appspot.com",
  messagingSenderId: "243982329725",
}; 

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    CreateQuoteComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(CONFIG),
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    QuotesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
